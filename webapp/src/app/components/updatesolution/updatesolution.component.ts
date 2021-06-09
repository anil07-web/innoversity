import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SolutionService } from 'src/app/services/solution.service';

@Component({
  selector: 'app-updatesolution',
  templateUrl: './updatesolution.component.html',
  styleUrls: ['./updatesolution.component.css'],
})
export class UpdatesolutionComponent implements OnInit {
  message: string;

  // public innovator=new InnovatorProperties();
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: SolutionService,
    private fb: FormBuilder,
    private httpClient: HttpClient
  ) {}
  public solutionId: any;
  public desc;
  public info;
  public updateForm;
  public isLoading;
  public variable: string;
  public fileChanged: boolean;
  public fileName: String;
  public uploadUrl: String;

  public selectedFile: File;
  // public innovator=new InnovatorProperties();
  ngOnInit(): void {
    this.solutionId = this.activatedRoute.snapshot.params.solutionId;
    this.getById();
    // console.log("Solution Id :",this.solutionId);
  }

  initForm() {
    this.updateForm = this.fb.group({
      description: [''],
      file: new FormControl('', [Validators.required]),
    });
    this.variable = this.updateForm.value;
    this.updateForm.get('description').setValue(this.desc);
    if (this.info.file !=null) {
      this.fileName = this.info.file;
      console.log("filename:", this.fileName);
    }
    console.log('Update the sol', this.desc);
  }

  get f() {
    return this.updateForm.controls;
  }

  public onFileChanged(event) {
    const file = event.target.files[0];
    this.selectedFile = file;
    this.fileChanged = true;
  }

  onSubmit() {
    // console.log(this.updateForm.get('description').value);
    // const item = this.updateForm.get('description').value;
    // const uploadFileData = new FormData();
    // uploadFileData.append('item', item);
    // uploadFileData.append('file', this.selectedFile);
    // this.service.updateSolution(this.solutionId, uploadFileData).subscribe((data) => {
    //     console.log(this.solutionId);
    //   });
  }

  checkUpdate() {
    if (this.fileChanged) {
      console.log('update discription and file');
      const item = this.updateForm.get('description').value;
      const uploadFileData = new FormData();

      uploadFileData.append('item', item);
      uploadFileData.append('file', this.selectedFile);
      this.service.updateSolution(this.solutionId, uploadFileData).subscribe((data) => {
          console.log(this.solutionId);
        });
    } else {
      console.log('update description');
      const item = this.updateForm.get('description').value;
      this.service
        .updateDescription(this.solutionId, item)
        .subscribe((data) => {
          console.log(this.solutionId);
        });
    }
  }
  getById() {
    this.service.getByid(this.solutionId).subscribe((data) => {
      this.info = data;
      this.desc = this.info.description;
      console.log('The information is', this.info);
      this.initForm();
    });
  }

  uploadbook(updateForm: FormGroup) {
    this.isLoading = true;
    const item = updateForm.value;
    const uploadFileData = new FormData();
    uploadFileData.append('item', JSON.stringify(item));
    uploadFileData.append('file', this.selectedFile);
    this.httpClient
      .post('/api/v1/solution/file/upload', uploadFileData, {
        observe: 'response',
      })
      .subscribe(
        (response) => {
          console.log(response);
          if (response.status === 201) {
            this.isLoading = false;
            this.message = ' uploaded successfully';
            setTimeout(() => {
              location.reload();
            }, 1000);
          } else {
            this.isLoading = false;
            this.message = ' uploading not successfull';
            setTimeout(() => {
              location.reload();
            }, 1000);
          }
        },
        (err) => console.log('Error Occured during saving: ' + err.message)
      );
  }

  openFile() {
    console.log("open file here");
    window.open(this.info.uploadUrl, "_blank");
  }
}

// onsubmit(form:NgForm){
//   if(form.valid){
//     this.service.updateDescription(this.solutionId,this.innovator.description).subscribe((data)=>{
//       alert("data is stored");
//       console.log("Solution Id :",this.solutionId);
//       this.desc=this.info.description;
//     });
//   }
//   else{
//     alert("wrong");
//   }
// }
