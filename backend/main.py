import mangum
from fastapi import FastAPI
from models import Base
from models.database import engine
from routes import users, items, token
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.include_router(token.router, prefix='/api')
app.include_router(users.router, prefix='/api')
app.include_router(items.router, prefix='/api')

handler = mangum.Mangum(app)