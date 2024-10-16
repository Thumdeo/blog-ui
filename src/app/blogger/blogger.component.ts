
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Blogger } from '../blogger.model';
import { BloggerService } from '../blogger.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-blogger',
  templateUrl: './blogger.component.html',
  styleUrls: ['./blogger.component.css'],

})
export class BloggerComponent implements OnInit {

  [x: string]: any;

  display = new FormControl('', Validators.required);  // FormControl for displaying file names
  fileNames: string[] = [];  // Array to store file names
  files: File[] = [];  // Array to store File objects
  filePreviews: string[] = [];  // Array to store file preview URLs

  // Handle file input change
  handleFileInputChange(files: FileList | null): void {
    if (files) {
      // Loop through selected files
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        this.files.push(file);  // Add file to array
        this.fileNames.push(file.name);  // Add file0  name to display array

        // Generate image preview for image files
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (e: any) => {
            this.filePreviews.push(e.target.result);  // Store image preview URL
          };
          reader.readAsDataURL(file);
        } else {
          this.filePreviews.push('');  // Empty string for non-image files
        }
      }

      // Set the FormControl value as the file names joined by commas
      this.display.setValue(this.fileNames.join(', '));
    }
  }

  // Remove file from the list
  removeFile(index: number): void {
    this.files.splice(index, 1);  // Remove the file from the array
    this.fileNames.splice(index, 1);  // Remove the file name from the display array
    this.filePreviews.splice(index, 1);  // Remove the preview URL

    // Update the FormControl value
    this.display.setValue(this.fileNames.join(', '));

    // If no files are left, mark the control as empty
    if (this.fileNames.length === 0) {
      this.display.reset();
    }
  }

  // Helper method to check if the file is an image
  isImage(fileName: string): boolean {
    const extension = fileName.split('.').pop()?.toLowerCase();
    return ['jpg', 'jpeg', 'png', 'gif'].includes(extension || '');
  }

  // Save files (could be to an API, localStorage, or just logging for now)
  saveFiles(): void {
    // Example: Log the files to the console
    console.log('Saved files:', this.files);

    // Here you can process the files, upload them to an API, or save them to local storage
    // Example: Store files in localStorage (not ideal for large files, but just for demonstration)
    localStorage.setItem('uploadedFiles', JSON.stringify(this.files.map(file => file.name))); // Save names only
  }

  blogger: Blogger = {
    userName: "",
    title: "",
    blogPost: "",
    fileUpload: "",
    blogComment: "",
    blogLikes: "",
    blogDislike: "",
    userID: 0
  }

  constructor(private bloggerservice: BloggerService) {

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  saveBlog(BlogpostForm: NgForm): void {
    this.bloggerservice.saveBlog(this.blogger).subscribe(
      {
        next: (res: Blogger) => {
          console.log(res);
          BlogpostForm.reset(BloggerComponent);
          this.blogger.blogPost="";
          
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      }
    );

  }

}


