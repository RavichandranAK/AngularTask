import { Injectable } from '@angular/core';
import { PhoneModel } from '../phone-model';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PhoneServiceService {

  private readonly posturl="http://localhost:8080/insert";
  private readonly geturl="http://localhost:8080/findAll"
  private readonly blackurl="http://localhost:8080/blackmobiles"
  private readonly middleurl="http://localhost:8080/middleletter"
  private readonly lasttwourl="http://localhost:8080/lasttwo"
  private readonly sorturl="http://localhost:8080/sort"
  private readonly nonduburl="http://localhost:8080/nondub"
  private readonly patchurl="http://localhost:8080/update/"
  private readonly deleteurl="http://localhost:8080/delete/"

  constructor(private http:HttpClient, private router:Router) { }
 
  posting(data:PhoneModel) :Observable<PhoneModel>
  {
    return this.http.post<PhoneModel>(this.posturl,data).pipe(tap(()=>alert("Posted Successfully")));

  }

  getting() :Observable<PhoneModel[]>
  {
    return this.http.get<PhoneModel[]>(this.geturl);
  }

  black() : Observable<PhoneModel[]>
  {
    return this.http.get<PhoneModel[]>(this.blackurl)
  }
  
  lasttwo():Observable<PhoneModel[]>
    {
      return this.http.get<PhoneModel[]>(this.lasttwourl);
  }

  primeph():Observable<PhoneModel[]>
    {
      return this.http.get<PhoneModel[]>(this.geturl).pipe(map(x=>x.filter(y=>
        this.findPrime(y.id))));
  }

   findPrime(a: number) : boolean {
       if(a<=1) {
        return false;
       }
       for(let i=2;i<a;i++) {
        if(a % i === 0) {
          return false;
        }
       }
      return true;
  }

  sort(): Observable<PhoneModel[]> {
    return this.http.get<PhoneModel[]>(this.sorturl);
  }
  
  nondub():Observable<PhoneModel[]> {
    return this.http.get<PhoneModel[]>(this.nonduburl);
  }

  update(data:PhoneModel[])
  {
    console.log(data)
    
    for(let i=0;i<data.length;i++) {
    if(data[i].rating>4.1) {
     
      let id=data[i].id
       data[i].price=data[i].price*1.1;
       window.alert("Are you want to Update price of "+data[i].brand)
       this.http.patch<PhoneModel>(this.patchurl+id,data[i]).subscribe(res=>console.log(res));
       
    }
    }
}

delete(data:PhoneModel[])
{
  for(let i=0;i<data.length;i++) {
    if(data[i].rating<4) {
  let ids=data[i].id;
  console.log(ids);
   this.http.delete<PhoneModel>(this.deleteurl+ids).subscribe(res=>console.log(res));
   window.alert("Deleted Successfully")
    }
}
}

deletecolor(data:PhoneModel[]) {
  for(let i=0;i<data.length;i++) {
    if(data[i].color.length % 2 ===1) {
      let ids=data[i].id;
      window.alert("Are you sure to Delete");
      this.http.delete(this.deleteurl+ids).subscribe(res=>console.log(res));
      this.router.navigate(["/show"])

    }
  }
}

getmiddle():Observable<String[]> {
  return this.http.get<String[]>(this.middleurl);
}
}
