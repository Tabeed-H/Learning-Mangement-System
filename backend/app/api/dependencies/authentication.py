from passlib.context import CryptContext
from jose import jwt 
from typing import Union, Any 

# create instance of CryptoCOntext
passwordEncrypt =  CryptContext(schemes=['bcrypt'])

# hash password
def hash_password(password: str) -> str:
    return passwordEncrypt.hash(password)

# verify password
def verify_password(text_password: str, encrypt_password: str) -> bool:
    return passwordEncrypt.verify(text_password, encrypt_password)

#create token
def generate_token(subject : Union[str, Any]) -> str:
    to_enodce = {"data": str(subject)}
    encodedJWT = jwt.encode(to_enodce, "intern", "HS256")
    return encodedJWT