import { HttpClient } from "@angular/common/http";
import { Component, EventEmitter, HostListener, OnInit, Output, Renderer2, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, map } from "rxjs";
import { Meta, Title } from '@angular/platform-browser';
import { InterceptRouterlinkDirective } from "./directive";
import Typed from 'typed.js';
@Component({
  selector:'blog',
  template:`
<!-- Add a loading state -->

<div  class="flex flex-col md:flex-row h-full w-full">
<div class="flex flex-col md:flex-row h-full w-full">
<div class="my-markdown-content backdrop-blur-lg  relative text-slate-400 pt-5 list  px-3 mr-3 ml-3 mb-3  text-lg md:w-4/6 overflow-auto " style="height: calc(100% - 150px) !important;">
     <div>

</div>
       <div  *ngIf="isLoading" >
       <svg version="1.1" id="L4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve" height="100px" width="100px" class="ml-7">
  <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
    <animate
      attributeName="opacity"
      dur="1s"
      values="0;1;0"
      repeatCount="indefinite"
      begin="0.1"/>    
  </circle>
  <circle fill="#fff" stroke="none" cx="26" cy="50" r="6">
    <animate
      attributeName="opacity"
      dur="1s"
      values="0;1;0"
      repeatCount="indefinite" 
      begin="0.2"/>       
  </circle>
  <circle fill="#fff" stroke="none" cx="46" cy="50" r="6">
    <animate
      attributeName="opacity"
      dur="1s"
      values="0;1;0"
      repeatCount="indefinite" 
      begin="0.3"/>     
  </circle>
</svg>

      </div>
       <div *ngIf="!isLoading" class="h-full w-full markdown" markdown appInterceptRouterlink [data]="data">

     </div>

  </div>
  <div class="mx-3 h-fit py-5 px-3 backdrop-blur-lg bh-black/30 rounded-lg  md:w-2/6" style="height:calc(100% - 150px);">
    <div class="header font-q flex w-full flex-row items-center text-lg line text-sky-400 font-black space-x-5"><svg class="mr-2" width="50px" height="50px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#02c9d3"><path d="M14 4a2 2 0 1 0-2.47 1.94V7a.48.48 0 0 1-.27.44L8.49 8.88l-2.76-1.4A.49.49 0 0 1 5.46 7V5.94a2 2 0 1 0-1 0V7a1.51 1.51 0 0 0 .82 1.34L8 9.74v1.32a2 2 0 1 0 1 0V9.74l2.7-1.36A1.49 1.49 0 0 0 12.52 7V5.92A2 2 0 0 0 14 4zM4 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5.47 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM12 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>{{  this.get_tree() }}</div>
<div class="flex flex-row">
<button (click)="back()" class=" mt-5 px-3 py-2 mb-3 bg-black/30 rounded-xl flex flex-row justify-center items-center text-sky-700 font-semibold">
    

<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M16.19 2H7.82C4.17 2 2 4.17 2 7.81V16.18C2 19.82 4.17 21.99 7.81 21.99H16.18C19.82 21.99 21.99 19.82 21.99 16.18V7.81C22 4.17 19.83 2 16.19 2Z" fill="#292D32"/>
<path d="M13.9195 8.48006H8.76945L9.09945 8.15006C9.38945 7.86006 9.38945 7.38006 9.09945 7.09006C8.80945 6.80006 8.32945 6.80006 8.03945 7.09006L6.46945 8.66006C6.17945 8.95006 6.17945 9.43006 6.46945 9.72006L8.03945 11.2901C8.18945 11.4401 8.37945 11.5101 8.56945 11.5101C8.75945 11.5101 8.94945 11.4401 9.09945 11.2901C9.38945 11.0001 9.38945 10.5201 9.09945 10.2301L8.83945 9.97006H13.9195C15.1995 9.97006 16.2495 11.0101 16.2495 12.3001C16.2495 13.5901 15.2094 14.6301 13.9195 14.6301H8.99945C8.58945 14.6301 8.24945 14.9701 8.24945 15.3801C8.24945 15.7901 8.58945 16.1301 8.99945 16.1301H13.9195C16.0295 16.1301 17.7495 14.4101 17.7495 12.3001C17.7495 10.1901 16.0295 8.48006 13.9195 8.48006Z" fill="#0369a1"/>
</svg>
        Go Back</button>
        <button (click)="github()" class="ml-1 mt-5 px-3 py-2 mb-3 bg-black/30 rounded-xl flex flex-row justify-center items-center text-sky-700 font-semibold">
        
        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" class="mr-1" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21ZM15.9299 8.25017C15.7204 8.25293 15.1872 8.34452 14.2695 9.03471C14.2361 9.05985 14.2022 9.08578 14.1678 9.11252C14.0704 9.18836 13.9431 9.21015 13.8277 9.17457L13.8253 9.17382C13.7671 9.15592 13.7088 9.13888 13.6504 9.12272C12.5651 8.82255 11.4349 8.82255 10.3496 9.12272C10.2882 9.13972 10.2268 9.15768 10.1657 9.17661L10.1644 9.17703C10.0529 9.21205 9.93139 9.19 9.83937 9.11807C9.80249 9.08937 9.76619 9.0616 9.73045 9.03473C8.81228 8.34432 8.27679 8.2528 8.0659 8.25016C7.86561 8.86863 7.84087 9.54684 7.99569 10.1834C8.00513 10.2222 8.01523 10.2608 8.02599 10.2993L8.02812 10.3068C8.05962 10.4184 8.03648 10.538 7.96621 10.6297C7.9504 10.6503 7.93482 10.6711 7.91949 10.6922C7.48056 11.2949 7.23972 12.0687 7.25034 12.8714L7.25038 12.8747C7.25036 14.5643 7.68912 15.5564 8.29455 16.1566C8.90483 16.7616 9.72415 17.0085 10.5687 17.1233L10.604 17.1281L10.6078 17.1286C11.5456 17.2688 12.443 17.2601 13.3777 17.1014L13.3898 17.0997L13.4137 17.0968C14.2627 16.9938 15.0859 16.7572 15.6994 16.1583C16.3076 15.5644 16.7496 14.5738 16.7496 12.8747L16.7497 12.8714C16.7603 12.0687 16.5194 11.2949 16.0805 10.6922C16.0664 10.6728 16.0521 10.6537 16.0377 10.6347L16.0366 10.6333C15.9647 10.5393 15.941 10.4168 15.9731 10.3025C15.9842 10.263 15.9945 10.2234 16.0042 10.1835C16.1588 9.54654 16.1326 8.86788 15.9299 8.25017Z" fill="#0369a1"/>
        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#0369a1" stroke-width="2"/>
        <path d="M13.717 8.88177C12.5881 8.56954 11.4119 8.56954 10.283 8.88177C10.2637 8.8871 10.2444 8.89254 10.2252 8.89808C10.1067 8.93218 9.97923 8.909 9.8807 8.83491V8.83491C8.69311 7.94193 8.07278 7.98181 7.91927 8.01161V8.01161C7.8946 8.0164 7.87585 8.03481 7.86732 8.05844C7.86516 8.06441 7.86303 8.07038 7.8609 8.07636C7.61639 8.76505 7.57904 9.52813 7.75277 10.2425C7.76289 10.2841 7.77371 10.3255 7.78525 10.3667C7.78601 10.3694 7.78677 10.3721 7.78753 10.3748C7.79754 10.4102 7.7902 10.4483 7.7678 10.4776V10.4776C7.75074 10.4998 7.73394 10.5223 7.71741 10.545C7.24479 11.1939 6.98907 12.0213 7.00036 12.8747C7.00036 16.3399 8.80396 17.1358 10.535 17.3711L10.5708 17.3758C11.5347 17.5199 12.4587 17.511 13.4195 17.3479L13.4438 17.345C15.1832 17.1339 16.9996 16.3587 16.9996 12.8747C17.0109 12.0213 16.7552 11.1939 16.2826 10.545C16.2674 10.5242 16.252 10.5035 16.2364 10.483C16.236 10.4825 16.2356 10.482 16.2352 10.4815C16.211 10.4498 16.203 10.4085 16.2138 10.3701V10.3701C16.2257 10.3277 16.2368 10.2852 16.2471 10.2425C16.421 9.52611 16.3815 8.76076 16.1329 8.07176C16.1313 8.06753 16.1298 8.06331 16.1283 8.05909C16.1195 8.03503 16.1004 8.01628 16.0752 8.01142V8.01142C15.921 7.98164 15.3041 7.94381 14.1193 8.83491V8.83491C14.0208 8.90896 13.8933 8.93197 13.7748 8.89804C13.7556 8.89252 13.7363 8.8871 13.717 8.88177Z" stroke="#0369a1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
            View on github</button>

</div>

     
    <ul class="backdrop-opacity-55 text-sky-600 rounded-lg bg-black/30  overflow-auto" style="height:340px;">
    <li  [routerLink]="'/' + this.repo + '/' +item.path" *ngFor="let item of this.tree"  class="cursor-pointer">{{item.path}}</li>
      

      
    </ul>
  </div>
</div>
</div>
  `,
})
export class Blog implements OnInit{

  @ViewChild(InterceptRouterlinkDirective)
  private interceptRouterlinkDirective!: InterceptRouterlinkDirective; 
  
  url: string= "https://raw.githubusercontent.com/HariharNautiyal2/main/some_blogs/readme.md";
  repo:string | null =this.route.snapshot.paramMap.get('repo');
  tree:any;
  directory:string | null = this.route.snapshot.paramMap.get('directory');
  directory2:string | null = this.route.snapshot.paramMap.get('directory2');
  name:string | null = this.route.snapshot.paramMap.get('file');
  private baseUrl = 'https://api.github.com';
  isLoading = false; // Add a loading state
  index:number=0;
 isTyping=false;
 chars:String[]=[];
 animatedString:string="";
  constructor(private renderer: Renderer2,private route: ActivatedRoute ,private router:Router,private http:HttpClient,private title:Title,private meta:Meta) {


  }

  data:string="";

  @Output() dataChanged: EventEmitter<string> = new EventEmitter<string>();

get_lol(){
  
}
  updateData() {
      const newData = "Data updated in child!";
      this.dataChanged.emit(newData); // Emit the event
  }
  
  ngOnInit() {
    // Get the inner width and height using Renderer2

    this.getTree();
    this.route.paramMap.subscribe(params => {
      const repo = params.get('repo');

      let name = params.get('file');
      const directory = params.get('directory');
      const directory2 = params.get('directory2');
 


      if (name) {
        name = name.includes('.md') ? name.slice(0, -3) : name;
        let namex=name.toLowerCase().search('readme');
        if(namex != -1){
            name=name.toUpperCase();
        }else{
           name=name.toLowerCase();
        }
     
        
        this.url = `https://raw.githubusercontent.com/HariharNautiyal2/${repo}/main/`;

        if (directory) {
          this.url += `${directory}/`;
          if (directory2) {
            this.url += `${directory2}/`;
          }
        }

        this.url += `${name}.md`;
        this.isLoading = true; // Start loading
        this.http.get(this.url, {responseType: 'text'}).subscribe((data:any)=>{
          this.startTyping(data);
          this.isLoading = false; // End loading
          const headingRegex = /^#+\s+(.*)/gm; // Matches lines starting with #
          const matches = [];
          let match;
          while ((match = headingRegex.exec(data))) {
              matches.push(match[1]);
          }
    
         this.title.setTitle(matches[0]);
         this.meta.addTags([
          {name: 'keywords', content: data},
          {name: 'description', content: this.url},
        ]);
    
        },(err:any)=>{
            console.log(err);
            this.isLoading = false; // End loading even if there's an error
        });
      }

      console.log(this.url);
    });
  }


  back(){

      let repo= this.repo;
      let directory = this.directory;
      let directory2= this.directory2;
      let name=this.name;
      if(name){
        name = name.includes('.md') ? name.slice(0, -3) : name;

      }
      
      if(directory2 != null && directory != null){
        this.router.navigate([ "/" + repo + "/" + directory + "/"  + "readme"]);
  
      }
      if(directory != null && directory2 === null){
        if(name?.toLowerCase() != "readme"){
          this.router.navigate([ "/" + repo + "/" + directory + "/"  + "readme"]);
        }else{
          this.router.navigate(["/" + repo + "/"  + "readme"])
        }
       
      }
      if(directory === null && directory2 === null){
        this.router.navigate(["/"])
        
      }
  
  }
  startTyping(s:string) {
    if(this.isTyping === true){
      this.animatedString = "";
      this.data="";
      this.index=0;
      this.chars=[];
      // Start typing effect
      this.typeString(s);
    }else{
      this.isTyping=true;
      // Start typing effect
      this.typeString(s);
    }
    // Set typing progress to true

  }

  // Method to end typing effect
   endTyping() {
    // Set typing progress to false
    this.index=9999999999999999999999999;
    this.data="";

    this.index=0;

  }
  // Use an arrow function to preserve the context of this
  typeString = (str: string) => {

    // Use a separate variable to store the animated string
     this.animatedString = "";
    // Split the string into an array of characters
    this.chars = str.split('');
    // Set the initial index to 0
    this.index = 0;
    // Set the interval to run the animation
    const intervalId = setInterval(() => {
      // Check if the index is within the length of the array and the isTyping flag is true
      if (this.index < this.chars.length && this.isTyping === true) {
        // Remove the cursor from the previous character by using a substring
        this.animatedString = this.animatedString.substring(0, this.animatedString.length - 1);
        // Add the current character and the cursor to the animated string
        this.animatedString += this.chars[this.index] + "|";
        // Increment the index
        this.index++;
        // Update the data attribute with the animated string
        this.data = this.animatedString;
      } else {
        // Clear the interval
        this.data= this.data.replaceAll("|","");
        clearInterval(intervalId);
      }
    }, 13); // Adjust typing speed here
  }

  github(){
  let sata="raw.githubusercontent.com/HariharNautiyal2/" + this.repo;
  let sata2 = "github.com/hariharnautiyal2/" + this.repo + "/blob";
    const modifiedString = this.url.replace(sata,sata2 );
 window.location.href=modifiedString;
   
  }
  get_url() {

      if(this.repo != null){
        if(this.directory2 != null){
         
          return   "/" + this.repo + "/" + this.directory + "/" + this.directory2 + "/"+ this.name + ".md";
        }
        if(this.directory != null && this.directory2 === null){
           
          return   "/" + this.repo + "/" + this.directory + "/"+ this.name + ".md";
        }
        else{
          
          return   "/" + this.repo + "/" + this.name + ".md";
        }
      }else{
        return "404 File not found";
      }

  }
  get_tree() {
    if(this.repo != null){
      if(this.directory2 != null && this.directory != null){
       
        return   "/" + this.repo + "/" + this.directory.replaceAll("%20"," ") + "/" + this.directory2.replaceAll("%20"," ") + "/";
      }
      if(this.directory != null && this.directory2 === null){
         
        return   "/" + this.repo + "/" + this.directory.replaceAll("%20"," ") + "/";
      }
      else{
        
        return   "/" + this.repo + "/";
      }
    }else{
      return "404 File not found";
    }
  }
  getTree(){
    const url = `https://api.github.com/repos/hariharnautiyal2/` + this.route.snapshot.paramMap.get('repo') +`/git/trees/main?recursive=1`;


   this.http.get(url).subscribe((res:any)=>{
   this.tree=res.tree.filter((item:any) => {
    if(this.directory != null && this.directory2 === null){
      return item.type === 'blob' && item.path.endsWith('.md') && item.path.startsWith(this.directory + "/");
    }
    if(this.directory2 != null){
      return item.type === 'blob' && item.path.endsWith('.md') && item.path.startsWith(this.directory + "/" + this.directory2 + "/");
    }
    if(this.directory === null && this.directory2 === null){
      return item.type === 'blob' && item.path.endsWith('.md');
    }

  });
   },(err)=>{
    console.log("error")
   })
  }
  // Rest of your code
}





  
  
  

