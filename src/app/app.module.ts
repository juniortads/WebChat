import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ChatInputComponent } from './chat-input/chat-input.component';

@NgModule({
  declarations: [
    ChatWindowComponent,
    ChatInputComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [ChatWindowComponent, ChatInputComponent]
})
export class AppModule { 
  
  constructor(private injector: Injector) {
    const webchat = <any>createCustomElement(ChatWindowComponent, { injector });
    customElements.define('web-chat', webchat);
  }
  
  ngDoBootstrap() {}
}
