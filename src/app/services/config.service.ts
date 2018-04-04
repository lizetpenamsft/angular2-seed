import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
    constructor() {
    }

    public endpoints = {
        "https://localhost:44335": 
        "https://AspNetCore_WebApi"
    };
    public get AdalConfig(): any {
        return {
            tenant: 'theniceweb.onmicrosoft.com',
            clientId: '11c15c3c-c00c-4365-a6b4-02a495716aab', //AAD SPA Application ID provided after registration
            endpoints: this.endpoints,
            redirectUri: window.location.origin + '/',
            postLogoutRedirectUri: window.location.origin + '/'
        };
    };

    public get ServiceConfig(): any {
        return {
            tenant: 'theniceweb.onmicrosoft.com',
            clientId: '813a92f0-bf14-4f0b-b09c-7e12c02bea08', //API Application ID provided after registration
            endpoints: this.endpoints,
            redirectUri: window.location.origin + '/',
            postLogoutRedirectUri: window.location.origin + '/'
        };
    }
    

}


