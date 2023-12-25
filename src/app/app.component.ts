import { Component } from '@angular/core';
import { faTrash,faFileClipboard,faReplyAll } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Path Formater';
  varipstring: string="";
  varopstring: string="";
  varPreviousData: string="";
  CopyClipboardIcon = faFileClipboard;
  TrashIcon = faTrash;
  replay = faReplyAll;

  PreviousData(){
    (document.getElementById("inputtxtbox") as HTMLInputElement).value = this.varPreviousData;
    this.someLogic();
  }
  someLogic(){
    var ipstring =  (document.getElementById("inputtxtbox") as HTMLInputElement).value;
    this.varopstring = ipstring.replaceAll('//',"/").replaceAll('"','');
    
    // store for previous data
    this.varPreviousData = ipstring;
    (document.getElementById("outputtxtbox") as HTMLInputElement).value = this.varopstring;
  }

  copyTextIP() {
    const text = (document.getElementById("inputtxtbox") as HTMLInputElement).value;
    navigator.clipboard.writeText(text);
  }
  copyTextOP() {
    const text = (document.getElementById("outputtxtbox") as HTMLInputElement).value;
    navigator.clipboard.writeText(text);
    // document.getElementById("msgcopy")
    var alertDiv = document.getElementById("msgcopy");
    if(alertDiv != null)
    alertDiv.hidden = false;
    setTimeout(() => {
      if(alertDiv != null)
      alertDiv.hidden = true;
    }, 2000);
  }

  clearTextALL() {
    (document.getElementById("inputtxtbox") as HTMLInputElement).value = '';
    (document.getElementById("outputtxtbox") as HTMLInputElement).value = '';
  }
}
