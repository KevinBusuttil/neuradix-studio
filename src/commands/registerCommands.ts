 /*---------------------------------------------------------------------------------------------
 * Created on Sat Apr 17 2021
 *
 * Copyright (c) 2021 Busuttil Technologies Limited
 *--------------------------------------------------------------------------------------------*/

 import {commands, Disposable, window} from "vscode"

 export let subscriptions : Disposable[] = [];

 export function registerCommands() : void {

	subscriptions = [
        commands.registerCommand('neuradix-studio.helloWorld', () => {
            // The code you place here will be executed every time your command is executed
    
            // Display a message box to the user
            window.showInformationMessage('Hello from Neuradix Studio V2!');
        })
    ]    

 }
