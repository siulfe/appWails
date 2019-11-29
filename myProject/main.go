package main

import (
  "github.com/leaanthony/mewn"
  "github.com/wailsapp/wails"
  "my-project.exe/backend/admin"
)

func main() {
  js := mewn.String("./frontend/dist/app.js")
  css := mewn.String("./frontend/dist/app.css")

  login := &admin.Login{}

  app := wails.CreateApp(&wails.AppConfig{
    Width:  1024, 
    Height: 768,
    Resizable: true,
    Title:  "My Project Wails",
    JS:     js,
    CSS:    css,
    Colour: "#131313",
  })
  
  app.Bind(login)
  app.Run()
}



