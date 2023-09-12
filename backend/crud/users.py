import datetime
from uuid import uuid4
from sqlalchemy.orm import Session
from schemas import users as schemas
from models import users as models


def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()


def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()


def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()


def create_user(db: Session, user: schemas.UserCreate):
    db_user = models.User(
        email=user.email,
        username=user.username,
        password=user.password,
        createdAt=datetime.datetime.now(),
        updatedAt=datetime.datetime.now(),
        token=str(uuid4())
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

