import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MemberService} from "../../Services/member.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Member} from "../../Modals/Member";

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  form: any;
  currentID: string = "";
  item: any;

  constructor(private memberService: MemberService /*injection du service MmeberService dans le comp memberform comp*/, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    // initialiser le formulaire
    this.initForm();

    //1.récupération de id à partir de url
    this.currentID = this.activatedRoute.snapshot.params['id'];
    console.log(this.currentID);
    //2. tester sur la valeur de id
    if (!!this.currentID) {
      //3.si id a une valeur  => getMemberBuId(id)=>member
      this.memberService.getMemberById(this.currentID).then((memberToFind) => {
        this.item = memberToFind;
        this.initForm1(this.item)
      });
      //4.extraction
    }
    //5. sinon this.initForm();
    else {
      this.initForm();
    }
  }

  initForm(): void {
    this.form = new FormGroup({
        cin: new FormControl(null, [Validators.required]),
        name: new FormControl(null, [Validators.required]),
        cv: new FormControl(null, [Validators.required]),
        type: new FormControl(null, [Validators.required])
      }
    );
  }

  ONSUB(): void {
    //récupération de l'element
    console.log(this.form.value);
    const objectToSubmit = {...this.item, ...this.form.value};
    // invocation de la methode du service qui envoie http(POST)
    this.memberService.saveMember(objectToSubmit).then(() => {
      this.router.navigate(['/members'])
    });
  }

  initForm1(member: Member): void {
    this.form = new FormGroup({
        cin: new FormControl(member.cin, [Validators.required]),
        name: new FormControl(member.name, [Validators.required]),
        cv: new FormControl(member.cv, [Validators.required]),
        type: new FormControl(member.type, [Validators.required])
      }
    );
  }

}
