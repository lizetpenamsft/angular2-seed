import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
    constructor() {
    }
    public get getAdalConfig(): any {
        return {
            tenant: 'Your Tenant ID',
            clientId: 'Your Client ID',
            redirectUri: window.location.origin + '/',
            postLogoutRedirectUri: window.location.origin + '/'
        };
    }
}