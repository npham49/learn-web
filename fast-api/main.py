import uvicorn
from fastapi import FastAPI

app = FastAPI()

@app.get("/health")
async def index():
    return {"message": "Hello World"}

@app.get("/{name}/{id}")
async def user(name:str, id:int):
    return {"name":name, "id":id}

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)