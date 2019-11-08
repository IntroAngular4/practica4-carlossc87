import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NotifyStoreService } from './notify-store.service';

@Injectable({
  providedIn: 'root'
})
export class AuditInterceptorService implements HttpInterceptor {
  constructor(private notifyStore: NotifyStoreService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const sreq = JSON.stringify(req);
    console.log('peticion: ', sreq);
    this.notifyStore.push(sreq);
    return next.handle(req);
  }
}
