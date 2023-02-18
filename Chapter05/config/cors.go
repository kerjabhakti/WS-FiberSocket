package config

import (
	"os"

	"github.com/gofiber/fiber/v2/middleware/cors"
)

var Internalhost string = os.Getenv("INTERNALHOST") + ":" + os.Getenv("PORT")

var Cors = cors.Config{
	AllowOrigins:     "https://*.ulbi.ac.id,https://whatsauth.github.io",
	AllowHeaders:     "Origin",
	ExposeHeaders:    "Content-Length",
	AllowCredentials: true,
}
