import { Injectable } from '@angular/core';


import { SwUpdate } from '@angular/service-worker';
@Injectable()
export class UpdateService {
  constructor(private swUpdate: SwUpdate) {

}
async update(){
  let update = this.swUpdate.checkForUpdate();
  if(await update === true){
     this.swUpdate.activateUpdate().then(()=>{
      document.location.reload()
     })

    
  }
}
}