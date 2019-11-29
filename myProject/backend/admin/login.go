package admin

import "fmt"

type userLogin struct{
	identification string `json:"identification"`
	email string `json:"email"`
	password string `json:"password"`
	participant string `json:"participant"`
}

type Login struct{}

func (l *Login)Logear(mapaRotisimo map[string]interface{})int{

	usuario := userLogin{
		identification: fmt.Sprintf("%v", mapaRotisimo["identification"]),
		email: fmt.Sprintf("%v", mapaRotisimo["email"]),
		password: fmt.Sprintf("%v", mapaRotisimo["password"]),
		participant: fmt.Sprintf("%v", mapaRotisimo["participant"]),
	}

	if validarUsuario(usuario){
		return 0
	}

	return 1
}

func validarUsuario(usuario userLogin) bool{

	if usuario.identification == "" || usuario.email == "" || usuario.password == "" || usuario.participant == ""{
		return true
	}

	return false
}