import { Component } from '@angular/core';
import { faTrash,faFileClipboard } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PATHFORMATTER';
  varipstring: string="";
  varopstring: string="";
  CopyClipboardIcon = faFileClipboard;
  TrashIcon = faTrash;
  someLogic(){
    var ipstring =  (document.getElementById("inputtxtbox") as HTMLInputElement).value;
    this.varopstring = ipstring.replaceAll('//',"/");
  }

  copyTextIP() {
    const text = (document.getElementById("inputtxtbox") as HTMLInputElement).value;
    navigator.clipboard.writeText(text);
  }
  copyTextOP() {
    const text = (document.getElementById("outputtxtbox") as HTMLInputElement).value;
    navigator.clipboard.writeText(text);
  }

  clearTextALL() {
    (document.getElementById("inputtxtbox") as HTMLInputElement).value = '';
    (document.getElementById("outputtxtbox") as HTMLInputElement).value = '';
  }
}
