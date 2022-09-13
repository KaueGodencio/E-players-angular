import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private userService:UserService ) {
    
   }

    // variáveis auxiliares
    mensagem = ""
    userModel = new User()

  logarUsuario(){
    
    this.userService.signin(this.userModel).subscribe( {
      next: (response) => {//sucesso
        console.log(response);
        
        this.mensagem = "It's Ready Success!"
      },
      error: (err) => {//erro
        console.log(err);
        
        this.mensagem = err.error
      }
    })

  }
  // logarUsuario(){
  //   this.userService.signin(this.userModel).subscribe( (response) => {//quando tudo der certo
  //     console.log(response);

  //     this.mensagem = "Mensagem do Professor"
      
  //   }, (err) => {//quando der erro
  //     this.mensagem = err.error;
      
  //       console.log('ERRO CAPTURADO PELO EDUARDO MENDES DA COSTA', err);
        
  //   })
  // }
  

  ngOnInit(): void {
  }

}
