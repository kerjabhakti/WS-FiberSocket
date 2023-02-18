package url

import (
	"chapter02/controller"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/websocket/v2"
)

func Web(page *fiber.App) {
	page.Get("/", controller.GetHelloword)
	page.Get("/ws", websocket.New(controller.WebSocket))
	page.Get("/ws/:id", websocket.New(controller.GetWebSocketId))

}
