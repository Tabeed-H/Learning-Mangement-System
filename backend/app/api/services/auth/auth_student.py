from sqlalchemy.orm import Session 
from fastapi import HTTPException, status, Depends
from pydantic import BaseModel
from fastapi.security import OAuth2PasswordBearer
from app.api.models.Student import Student
from app.api.services.Student import get_user_by_id
from typing import Annotated
from jose import jwt, JWTError
from sqlalchemy.orm import Session 
from app.database import SessionLocal


class TokenPayload(BaseModel):
    data: str


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
# An instance of OAuth2PasswordBearer
# Used to extract and validate OAuth2 password bearer tokens
resuableAuth = OAuth2PasswordBearer(
    tokenUrl=f"api/v1/student/login",      # URL to request a token
    scheme_name="JWT"                               # Set authentication Scheme
)


async def get_current_user( token: Annotated[str, Depends(resuableAuth)], db: Session = Depends(get_db)) -> Student:
    try:
        # decode token
        payload= jwt.decode(
            token, "intern", algorithms=["HS256"]
        )

        tokenData = TokenPayload(**payload)
  
    except(JWTError):
        raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED, 
                detail="Couldnot validate Token",
                headers={"WW-Authenticate": "Bearer"},
        )

    # Find user by ID
    user = await get_user_by_id(db, tokenData.data)
    # if user not found
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Could not find User"
        )
    
    # Return user
    return user
