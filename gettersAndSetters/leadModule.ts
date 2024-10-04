import { faker } from "@faker-js/faker";
import { LeadSource } from "../constants/LeadsPageConstants";


export class LeadInformation{

    private _Salutation: string;
    private _FirstName: string;
    private _Title: string;
    private _Email: string = faker.internet.email();
    private _Phone: string = faker.phone.number();
    private _Fax: string;
    private _Mobile: string;
    private _WebSite: string;
    private _LeadSource: string = LeadSource.Advertisement; ;
    private _LeadStatus: string;
    private _Industry: string;
    private _NoOfEmp: string;
    private _AnnualRev: string;
    private _rating: string;
    private _SkypeId: string;
    private _SecEmail: string;
    private _Twitter: string;

    public get Fax(): string {
        return this._Fax;
    }
    public set Fax(value: string) {
        this._Fax = value;
    }

    public get Mobile(): string {
        return this._Mobile;
    }
    public set Mobile(value: string) {
        this._Mobile = value;
    }

    public get WebSite(): string {
        return this._WebSite;
    }
    public set WebSite(value: string) {
        this._WebSite = value;
    }

    public get LeadSource(): string {
        return this._LeadSource;
    }
    public set LeadSource(value: string) {
        this._LeadSource = value;
    }
 
    public get LeadStatus(): string {
        return this._LeadStatus;
    }
    public set LeadStatus(value: string) {
        this._LeadStatus = value;
    }

    public get Industry(): string {
        return this._Industry;
    }
    public set Industry(value: string) {
        this._Industry = value;
    }

    public get NoOfEmp(): string {
        return this._NoOfEmp;
    }
    public set NoOfEmp(value: string) {
        this._NoOfEmp = value;
    }

    public get AnnualRev(): string {
        return this._AnnualRev;
    }
    public set AnnualRev(value: string) {
        this._AnnualRev = value;
    }

    public get rating(): string {
        return this._rating;
    }
    public set rating(value: string) {
        this._rating = value;
    }
    
    public get SkypeId(): string {
        return this._SkypeId;
    }
    public set SkypeId(value: string) {
        this._SkypeId = value;
    }

    public get SecEmail(): string {
        return this._SecEmail;
    }
    public set SecEmail(value: string) {
        this._SecEmail = value;
    }
    


    public get Twitter(): string {
        return this._Twitter;
    }
    public set Twitter(value: string) {
        this._Twitter = value;
    }
    public get Phone(): string {
        return this._Phone;
    }
    public set Phone(value: string) {
        this._Phone = value;
    }
   

    public get Title(): string {
        return this._Title;
    }
    public set Title(value: string) {
        this._Title = value;
    }
    
    public get Email(): string {
        return this._Email;
    }
    public set Email(value: string) {
        this._Email = value;
    }

    public get Salutation(): string {
        return this._Salutation;
    }
    public set Salutation(value: string) {
         this._Salutation = value;
    
    }

    

    public get FirstName(): string {
        return this._FirstName;
    }
    public set FirstName(value: string) {
        this._FirstName = value;
    }
    
}

export class AddressInformation{
    private _Street: string;
    private _City: string;
    private _State: string;
    private _ZipCode: string;
    private _Country: string;

    public get Street(): string {
        return this._Street;
    }
    public set Street(value: string) {
        this._Street = value;
    }

    public get City(): string {
        return this._City;
    }
    public set City(value: string) {
        this._City = value;
    }

    public get State(): string {
        return this._State;
    }
    public set State(value: string) {
        this._State = value;
    }

    public get ZipCode(): string {
        return this._ZipCode;
    }
    public set ZipCode(value: string) {
        this._ZipCode = value;
    }

    public get Country(): string {
        return this._Country;
    }
    public set Country(value: string) {
        this._Country = value;
    }
}

export class DescriptionInformation{
    private _Description: string;
    public get Description(): string {
        return this._Description;
    }
    public set Description(value: string) {
        this._Description = value;
    }
}