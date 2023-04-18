import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn=false;
  login(username:string,password:string):boolean{
    if(username==='admin'&&password==='admin'){
      console.log('correct')
      this.isLoggedIn=true;
      return true;
    }
    else{
    return false;
    }
  }
  logout(): void {
    this.isLoggedIn = false;
  }
}
