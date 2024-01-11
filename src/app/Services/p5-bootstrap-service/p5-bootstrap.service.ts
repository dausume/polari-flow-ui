import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class p5BootstrapService {

  //Default extension scripts, assumes extension scripts are in js, and in an immediately-invoked function expression (IIFE) like (function() {...})
  executeExtensionScripts() {
    // Load and execute your extension scripts here
    //this.loadScript('.js-libs/p5.experience.js');
    //this.loadScript('path/to/script2.js');
    // Add more scripts as needed
  }

  //Used to load additional scripts at runtime.
  private loadScript(scriptUrl: string) {
    const script = document.createElement('script');
    script.src = scriptUrl;
    document.body.appendChild(script);
  }

}