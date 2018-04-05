import { ConfigService } from './config.service';
import { Injectable } from '@angular/core';
import 'expose-loader?AuthenticationContext!../../../node_modules/adal-angular/lib/adal.js';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { runInNewContext } from 'vm';
import { BaseResponseOptions } from '@angular/http';
import { BaseService } from './base.service';
let createAuthContextFn: adal.AuthenticationContextStatic = AuthenticationContext;

@Injectable()
export class AdalService {
    public resource:string;
    private context: adal.AuthenticationContext;
    constructor(private configService: ConfigService) {
        this.context = new createAuthContextFn(configService.AdalConfig);
       
    }

    login() {
        this.context.login();
    }

    logout() {
        this.context.logOut();
    }

    handleCallback() {
        this.context.handleWindowCallback();
    }

    
    public get userInfo() {
        return this.context.getCachedUser();
    }


//trying to use a promise to call the AAD to acquire new token for API
    public get getApiAccessToken() {

        var user = this.context.getCachedUser();
        console.log(user);

      

        var apiURI= this.configService.endpoints["https://localhost:44335"];
        var apiToken;

        const p = new Promise<string>((resolve, reject) => {
  
            this.context.acquireToken(apiURI, (error, token) => {
  
                if (error || !token) {
  
                 console.log('ADAL error occurred in acquireToken: ' + error);
  
                reject(error);
  
                } else {
  
                resolve(token);
  
                }
  
            });
  
         });
  
        return p;
  
    }


    public get apiAccessToken()
    {
       

        var user = this.context.getCachedUser();
        console.log(user);

      

        var apiURI= this.configService.endpoints["https://localhost:44335"];
        var apiToken;

       
        this.context.clearCache();
        this.context.clearCacheForResource(this.configService.AdalConfig.clientId);

        var isCallback = this.context.isCallback(window.location.hash);
        


  
  
  





        this.context.acquireToken(apiURI, function (error, token) {

            if (error || !token) {
                console.log("ADAL error occurred: " + error);
                
            }
            
            

            console.log(error);
            console.log(token);
            apiToken=token;
            console.log(apiToken);
        });

        this.context.handleWindowCallback();
       
        

       

        return apiToken;
        
    }
    public get accessToken() {


        var cachedToken =this.context.getCachedToken(this.configService.AdalConfig.clientId);
        
        return cachedToken;
        
    }

    public get isAuthenticated() {
        return this.userInfo && this.accessToken;
    }
}