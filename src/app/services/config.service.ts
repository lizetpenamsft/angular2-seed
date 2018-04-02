import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
    constructor() {
    }

    public endpoints = DefineEndpoints();
    public get AdalConfig(): any {
        return {
            tenant: 'theniceweb.onmicrosoft.com',
            clientId: '11c15c3c-c00c-4365-a6b4-02a495716aab', //AAD Application ID provided after registration
            endpoints:this.endpoints,
            redirectUri: window.location.origin + '/',
            postLogoutRedirectUri: window.location.origin + '/'
        };
    }
}

function DefineEndpoints() {
    return {
        "http://localhost:5000": 
        "https://theniceweb.onmicrosoft.com/AspNetCore_WebApi"
    };
}
