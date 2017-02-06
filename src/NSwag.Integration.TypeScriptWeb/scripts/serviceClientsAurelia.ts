﻿/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v9.0.6245.39516 (NJsonSchema v8.0.6242.20238) (http://NSwag.org)
// </auto-generated>
//----------------------

import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';

@inject(String, HttpClient)
export class GeoClient {
    private baseUrl: string; 
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.baseUrl = baseUrl ? baseUrl : "";
        this.http = http ? http : window;
    }

    fromBodyTest(location: GeoPoint): Promise<void> {
        let url_ = this.baseUrl + "/api/Geo/FromBodyTest";

        const content_ = JSON.stringify(location ? location.toJS() : null);

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            }
        };

        return this.http.fetch(url_, options_).then((response) => {
            return this.processFromBodyTest(response);
        });
    }

    protected processFromBodyTest(response: Response): Promise<void> {
        return response.text().then((responseText) => {
            const status = response.status; 

            if (status === 204) {
                return null;
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }

    fromUriTest(latitude: number, longitude: number): Promise<void> {
        let url_ = this.baseUrl + "/api/Geo/FromUriTest?";
        if (latitude === null)
            throw new Error("The parameter 'latitude' cannot be null.");
        else if (latitude !== undefined)
            url_ += "Latitude=" + encodeURIComponent("" + latitude) + "&"; 
        if (longitude === null)
            throw new Error("The parameter 'longitude' cannot be null.");
        else if (longitude !== undefined)
            url_ += "Longitude=" + encodeURIComponent("" + longitude) + "&";

        const content_ = "";

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            }
        };

        return this.http.fetch(url_, options_).then((response) => {
            return this.processFromUriTest(response);
        });
    }

    protected processFromUriTest(response: Response): Promise<void> {
        return response.text().then((responseText) => {
            const status = response.status; 

            if (status === 204) {
                return null;
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }

    addPolygon(points: GeoPoint[]): Promise<void> {
        let url_ = this.baseUrl + "/api/Geo/AddPolygon";

        let contentData_: any = [];
        if (points) {
            for (let item of points)
                contentData_.push(item.toJS());
        }
        const content_ = JSON.stringify(points ? contentData_ : null);

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            }
        };

        return this.http.fetch(url_, options_).then((response) => {
            return this.processAddPolygon(response);
        });
    }

    protected processAddPolygon(response: Response): Promise<void> {
        return response.text().then((responseText) => {
            const status = response.status; 

            if (status === 204) {
                return null;
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }

    filter(currentStates: string[]): Promise<void> {
        let url_ = this.baseUrl + "/api/Geo/Filter?";
        if (currentStates !== undefined)
            currentStates.forEach(item => { url_ += "currentStates=" + encodeURIComponent("" + item) + "&"; });

        const content_ = "";

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            }
        };

        return this.http.fetch(url_, options_).then((response) => {
            return this.processFilter(response);
        });
    }

    protected processFilter(response: Response): Promise<void> {
        return response.text().then((responseText) => {
            const status = response.status; 

            if (status === 204) {
                return null;
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }

    reverse(values: string[]): Promise<string[]> {
        let url_ = this.baseUrl + "/api/Geo/Reverse?";
        if (values !== undefined)
            values.forEach(item => { url_ += "values=" + encodeURIComponent("" + item) + "&"; });

        const content_ = "";

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            }
        };

        return this.http.fetch(url_, options_).then((response) => {
            return this.processReverse(response);
        });
    }

    protected processReverse(response: Response): Promise<string[]> {
        return response.text().then((responseText) => {
            const status = response.status; 

            if (status === 200) {
                let result200: string[] = null;
                let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(item);
                }
                return result200;
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }

    refresh(): Promise<void> {
        let url_ = this.baseUrl + "/api/Geo/Refresh";

        const content_ = "";

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            }
        };

        return this.http.fetch(url_, options_).then((response) => {
            return this.processRefresh(response);
        });
    }

    protected processRefresh(response: Response): Promise<void> {
        return response.text().then((responseText) => {
            const status = response.status; 

            if (status === 204) {
                return null;
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }

    uploadFile(file: FileParameter): Promise<boolean> {
        let url_ = this.baseUrl + "/api/Geo/UploadFile";

        const content_ = new FormData();
        if (file !== null)
            content_.append("file", file.data, file.fileName ? file.fileName : "file");

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                'Content-Type': <string>undefined
            }
        };

        return this.http.fetch(url_, options_).then((response) => {
            return this.processUploadFile(response);
        });
    }

    protected processUploadFile(response: Response): Promise<boolean> {
        return response.text().then((responseText) => {
            const status = response.status; 

            if (status === 200) {
                let result200: boolean = null;
                let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return result200;
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }

    uploadFiles(files: FileParameter[]): Promise<void> {
        let url_ = this.baseUrl + "/api/Geo/UploadFiles";

        const content_ = new FormData();
        if (files !== null)
            files.forEach(item_ => content_.append("files", item_.data, item_.fileName ? item_.fileName : "files") );

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                'Content-Type': <string>undefined
            }
        };

        return this.http.fetch(url_, options_).then((response) => {
            return this.processUploadFiles(response);
        });
    }

    protected processUploadFiles(response: Response): Promise<void> {
        return response.text().then((responseText) => {
            const status = response.status; 

            if (status === 204) {
                return null;
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }

    saveItems(request: GenericRequestOfAddressAndPerson): Promise<void> {
        let url_ = this.baseUrl + "/api/Geo/SaveItems";

        const content_ = JSON.stringify(request ? request.toJS() : null);

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            }
        };

        return this.http.fetch(url_, options_).then((response) => {
            return this.processSaveItems(response);
        });
    }

    protected processSaveItems(response: Response): Promise<void> {
        return response.text().then((responseText) => {
            const status = response.status; 

            if (status === 204) {
                return null;
            } else if (status === 450) {
                let result450: Exception = null;
                let resultData450 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                result450 = resultData450 ? Exception.fromJS(resultData450) : null;
                this.throwException("A server error occurred.", status, responseText, result450);
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }

    getUploadedFile(id: number, override: boolean): Promise<any> {
        let url_ = this.baseUrl + "/api/Geo/GetUploadedFile/{id}?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id)); 
        if (override === null)
            throw new Error("The parameter 'override' cannot be null.");
        else if (override !== undefined)
            url_ += "override=" + encodeURIComponent("" + override) + "&";

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            }
        };

        return this.http.fetch(url_, options_).then((response) => {
            return this.processGetUploadedFile(response);
        });
    }

    protected processGetUploadedFile(response: Response): Promise<any> {
        return response.text().then((responseText) => {
            const status = response.status; 

            if (status === 200) {
                let result200: any = null;
                let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return result200;
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }

    protected throwException(message: string, status: number, response: string, result?: any): any {
        if(result !== null && result !== undefined)
            throw result;
        else
            throw new SwaggerException(message, status, response, null);
    }
}

@inject(String, HttpClient)
export class PersonsClient {
    private baseUrl: string; 
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.baseUrl = baseUrl ? baseUrl : "";
        this.http = http ? http : window;
    }

    getAll(): Promise<Person[]> {
        let url_ = this.baseUrl + "/api/Persons";

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            }
        };

        return this.http.fetch(url_, options_).then((response) => {
            return this.processGetAll(response);
        });
    }

    protected processGetAll(response: Response): Promise<Person[]> {
        return response.text().then((responseText) => {
            const status = response.status; 

            if (status === 200) {
                let result200: Person[] = null;
                let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(Person.fromJS(item));
                }
                return result200;
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }

    add(person: Person): Promise<void> {
        let url_ = this.baseUrl + "/api/Persons";

        const content_ = JSON.stringify(person ? person.toJS() : null);

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            }
        };

        return this.http.fetch(url_, options_).then((response) => {
            return this.processAdd(response);
        });
    }

    protected processAdd(response: Response): Promise<void> {
        return response.text().then((responseText) => {
            const status = response.status; 

            if (status === 204) {
                return null;
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }

    find(gender: Gender): Promise<Person[]> {
        let url_ = this.baseUrl + "/api/Persons/find/{gender}";
        if (gender === undefined || gender === null)
            throw new Error("The parameter 'gender' must be defined.");
        url_ = url_.replace("{gender}", encodeURIComponent("" + gender));

        const content_ = "";

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            }
        };

        return this.http.fetch(url_, options_).then((response) => {
            return this.processFind(response);
        });
    }

    protected processFind(response: Response): Promise<Person[]> {
        return response.text().then((responseText) => {
            const status = response.status; 

            if (status === 200) {
                let result200: Person[] = null;
                let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(Person.fromJS(item));
                }
                return result200;
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }

    findOptional(gender: Gender): Promise<Person[]> {
        let url_ = this.baseUrl + "/api/Persons/find2?";
        if (gender === undefined)
            throw new Error("The parameter 'gender' must be defined.");
        else
            url_ += "gender=" + encodeURIComponent("" + gender) + "&";

        const content_ = "";

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            }
        };

        return this.http.fetch(url_, options_).then((response) => {
            return this.processFindOptional(response);
        });
    }

    protected processFindOptional(response: Response): Promise<Person[]> {
        return response.text().then((responseText) => {
            const status = response.status; 

            if (status === 200) {
                let result200: Person[] = null;
                let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(Person.fromJS(item));
                }
                return result200;
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }

    get(id: string): Promise<Person> {
        let url_ = this.baseUrl + "/api/Persons/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            }
        };

        return this.http.fetch(url_, options_).then((response) => {
            return this.processGet(response);
        });
    }

    protected processGet(response: Response): Promise<Person> {
        return response.text().then((responseText) => {
            const status = response.status; 

            if (status === 200) {
                let result200: Person = null;
                let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                result200 = resultData200 ? Person.fromJS(resultData200) : null;
                return result200;
            } else if (status === 500) {
                let result500: PersonNotFoundException = null;
                let resultData500 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                result500 = resultData500 ? PersonNotFoundException.fromJS(resultData500) : null;
                this.throwException("A server error occurred.", status, responseText, result500);
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }

    delete(id: string): Promise<void> {
        let url_ = this.baseUrl + "/api/Persons/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));

        const content_ = "";

        let options_ = <RequestInit>{
            body: content_,
            method: "DELETE",
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            }
        };

        return this.http.fetch(url_, options_).then((response) => {
            return this.processDelete(response);
        });
    }

    protected processDelete(response: Response): Promise<void> {
        return response.text().then((responseText) => {
            const status = response.status; 

            if (status === 204) {
                return null;
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }

    throw(id: string): Promise<Person> {
        let url_ = this.baseUrl + "/api/Persons/Throw?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined and cannot be null.");
        else
            url_ += "id=" + encodeURIComponent("" + id) + "&";

        const content_ = "";

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            }
        };

        return this.http.fetch(url_, options_).then((response) => {
            return this.processThrow(response);
        });
    }

    protected processThrow(response: Response): Promise<Person> {
        return response.text().then((responseText) => {
            const status = response.status; 

            if (status === 200) {
                let result200: Person = null;
                let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                result200 = resultData200 ? Person.fromJS(resultData200) : null;
                return result200;
            } else if (status === 500) {
                let result500: PersonNotFoundException = null;
                let resultData500 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                result500 = resultData500 ? PersonNotFoundException.fromJS(resultData500) : null;
                this.throwException("A server error occurred.", status, responseText, result500);
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }

    /**
     * Gets the name of a person.
     * @id The person ID.
     * @return The person's name.
     */
    getName(id: string): Promise<string> {
        let url_ = this.baseUrl + "/api/Persons/{id}/Name";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            }
        };

        return this.http.fetch(url_, options_).then((response) => {
            return this.processGetName(response);
        });
    }

    protected processGetName(response: Response): Promise<string> {
        return response.text().then((responseText) => {
            const status = response.status; 

            if (status === 200) {
                let result200: string = null;
                let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return result200;
            } else if (status === 500) {
                let result500: PersonNotFoundException = null;
                let resultData500 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                result500 = resultData500 ? PersonNotFoundException.fromJS(resultData500) : null;
                this.throwException("A server error occurred.", status, responseText, result500);
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }

    addXml(person: string): Promise<string> {
        let url_ = this.baseUrl + "/api/Persons/AddXml";

        const content_ = person;

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/xml; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            }
        };

        return this.http.fetch(url_, options_).then((response) => {
            return this.processAddXml(response);
        });
    }

    protected processAddXml(response: Response): Promise<string> {
        return response.text().then((responseText) => {
            const status = response.status; 

            if (status === 200) {
                let result200: string = null;
                let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return result200;
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }

    protected throwException(message: string, status: number, response: string, result?: any): any {
        if(result !== null && result !== undefined)
            throw result;
        else
            throw new SwaggerException(message, status, response, null);
    }
}

export class GeoPoint { 
    latitude: number; 
    longitude: number;
    constructor(data?: any) {
        if (data !== undefined) {
            this.latitude = data["Latitude"] !== undefined ? data["Latitude"] : undefined;
            this.longitude = data["Longitude"] !== undefined ? data["Longitude"] : undefined;
        }
    }

    static fromJS(data: any): GeoPoint {
        return new GeoPoint(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        data["Latitude"] = this.latitude !== undefined ? this.latitude : undefined;
        data["Longitude"] = this.longitude !== undefined ? this.longitude : undefined;
        return data; 
    }

    toJSON() {
        return JSON.stringify(this.toJS());
    }

    clone() {
        const json = this.toJSON();
        return new GeoPoint(JSON.parse(json));
    }
}

export class GenericRequestOfAddressAndPerson { 
    item1: Address; 
    item2: Person;
    constructor(data?: any) {
        if (data !== undefined) {
            this.item1 = data["Item1"] ? Address.fromJS(data["Item1"]) : undefined;
            this.item2 = data["Item2"] ? Person.fromJS(data["Item2"]) : undefined;
        }
    }

    static fromJS(data: any): GenericRequestOfAddressAndPerson {
        return new GenericRequestOfAddressAndPerson(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        data["Item1"] = this.item1 ? this.item1.toJS() : undefined;
        data["Item2"] = this.item2 ? this.item2.toJS() : undefined;
        return data; 
    }

    toJSON() {
        return JSON.stringify(this.toJS());
    }

    clone() {
        const json = this.toJSON();
        return new GenericRequestOfAddressAndPerson(JSON.parse(json));
    }
}

export class Address { 
    isPrimary: boolean; 
    city: string;
    constructor(data?: any) {
        if (data !== undefined) {
            this.isPrimary = data["IsPrimary"] !== undefined ? data["IsPrimary"] : undefined;
            this.city = data["City"] !== undefined ? data["City"] : undefined;
        }
    }

    static fromJS(data: any): Address {
        return new Address(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        data["IsPrimary"] = this.isPrimary !== undefined ? this.isPrimary : undefined;
        data["City"] = this.city !== undefined ? this.city : undefined;
        return data; 
    }

    toJSON() {
        return JSON.stringify(this.toJS());
    }

    clone() {
        const json = this.toJSON();
        return new Address(JSON.parse(json));
    }
}

export class Person { 
    id: string; 
    /** Gets or sets the first name. */
    firstName: string; 
    /** Gets or sets the last name. */
    lastName: string; 
    gender: Gender; 
    dateOfBirth: Date; 
    weight: number; 
    height: number; 
    age: number; 
    averageSleepTime: string; 
    address: Address = new Address(); 
    children: Person[] = []; 
    skills: { [key: string] : SkillLevel; };    protected _discriminator: string;

    constructor(data?: any) {
        this._discriminator = "Person";
        if (data !== undefined) {
            this.id = data["Id"] !== undefined ? data["Id"] : undefined;
            this.firstName = data["FirstName"] !== undefined ? data["FirstName"] : undefined;
            this.lastName = data["LastName"] !== undefined ? data["LastName"] : undefined;
            this.gender = data["Gender"] !== undefined ? data["Gender"] : undefined;
            this.dateOfBirth = data["DateOfBirth"] ? new Date(data["DateOfBirth"].toString()) : undefined;
            this.weight = data["Weight"] !== undefined ? data["Weight"] : undefined;
            this.height = data["Height"] !== undefined ? data["Height"] : undefined;
            this.age = data["Age"] !== undefined ? data["Age"] : undefined;
            this.averageSleepTime = data["AverageSleepTime"] !== undefined ? data["AverageSleepTime"] : undefined;
            this.address = data["Address"] ? Address.fromJS(data["Address"]) : new Address();
            if (data["Children"] && data["Children"].constructor === Array) {
                this.children = [];
                for (let item of data["Children"])
                    this.children.push(Person.fromJS(item));
            }
            if (data["Skills"]) {
                this.skills = {};
                for (let key in data["Skills"]) {
                    if (data["Skills"].hasOwnProperty(key))
                        this.skills[key] = data["Skills"][key] !== undefined ? data["Skills"][key] : undefined;
                }
            }
        }
    }

    static fromJS(data: any): Person {
        if (data["discriminator"] === "Teacher")
            return new Teacher(data);
        return new Person(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        data["discriminator"] = this._discriminator; 
        data["Id"] = this.id !== undefined ? this.id : undefined;
        data["FirstName"] = this.firstName !== undefined ? this.firstName : undefined;
        data["LastName"] = this.lastName !== undefined ? this.lastName : undefined;
        data["Gender"] = this.gender !== undefined ? this.gender : undefined;
        data["DateOfBirth"] = this.dateOfBirth ? this.dateOfBirth.toISOString() : undefined;
        data["Weight"] = this.weight !== undefined ? this.weight : undefined;
        data["Height"] = this.height !== undefined ? this.height : undefined;
        data["Age"] = this.age !== undefined ? this.age : undefined;
        data["AverageSleepTime"] = this.averageSleepTime !== undefined ? this.averageSleepTime : undefined;
        data["Address"] = this.address ? this.address.toJS() : undefined;
        if (this.children && this.children.constructor === Array) {
            data["Children"] = [];
            for (let item of this.children)
                data["Children"].push(item.toJS());
        }
        if (this.skills) {
            data["Skills"] = {};
            for (let key in this.skills) {
                if (this.skills.hasOwnProperty(key))
                    data["Skills"][key] = this.skills[key] !== undefined ? this.skills[key] : undefined;
            }
        }
        return data; 
    }

    toJSON() {
        return JSON.stringify(this.toJS());
    }

    clone() {
        const json = this.toJSON();
        return new Person(JSON.parse(json));
    }
}

export enum Gender {
    Male = <any>"Male", 
    Female = <any>"Female", 
}

export enum SkillLevel {
    Low = 0, 
    Medium = 1, 
    Height = 2, 
}

export class Teacher extends Person { 
    course: string; 
    minimumSkillLevel: SkillLevel;
    constructor(data?: any) {
        super(data);
        this._discriminator = "Teacher";
        if (data !== undefined) {
            this.course = data["Course"] !== undefined ? data["Course"] : undefined;
            this.minimumSkillLevel = data["MinimumSkillLevel"] !== undefined ? data["MinimumSkillLevel"] : undefined;
        }
    }

    static fromJS(data: any): Teacher {
        return new Teacher(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        data["Course"] = this.course !== undefined ? this.course : undefined;
        data["MinimumSkillLevel"] = this.minimumSkillLevel !== undefined ? this.minimumSkillLevel : undefined;
        super.toJS(data);
        return data; 
    }

    toJSON() {
        return JSON.stringify(this.toJS());
    }

    clone() {
        const json = this.toJSON();
        return new Teacher(JSON.parse(json));
    }
}

export class Exception { 
    message: string; 
    innerException: Exception; 
    stackTrace: string; 
    source: string;
    constructor(data?: any) {
        if (data !== undefined) {
            this.message = data["Message"] !== undefined ? data["Message"] : undefined;
            this.innerException = data["InnerException"] ? Exception.fromJS(data["InnerException"]) : undefined;
            this.stackTrace = data["StackTrace"] !== undefined ? data["StackTrace"] : undefined;
            this.source = data["Source"] !== undefined ? data["Source"] : undefined;
        }
    }

    static fromJS(data: any): Exception {
        return new Exception(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        data["Message"] = this.message !== undefined ? this.message : undefined;
        data["InnerException"] = this.innerException ? this.innerException.toJS() : undefined;
        data["StackTrace"] = this.stackTrace !== undefined ? this.stackTrace : undefined;
        data["Source"] = this.source !== undefined ? this.source : undefined;
        return data; 
    }

    toJSON() {
        return JSON.stringify(this.toJS());
    }

    clone() {
        const json = this.toJSON();
        return new Exception(JSON.parse(json));
    }
}

export class PersonNotFoundException extends Exception { 
    id: string;
    constructor(data?: any) {
        super(data);
        if (data !== undefined) {
            this.id = data["id"] !== undefined ? data["id"] : undefined;
        }
    }

    static fromJS(data: any): PersonNotFoundException {
        return new PersonNotFoundException(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        data["id"] = this.id !== undefined ? this.id : undefined;
        super.toJS(data);
        return data; 
    }

    toJSON() {
        return JSON.stringify(this.toJS());
    }

    clone() {
        const json = this.toJSON();
        return new PersonNotFoundException(JSON.parse(json));
    }
}

export interface FileParameter
{
    data: any;
    fileName: string;
}

export class SwaggerException extends Error {
    message: string;
    status: number; 
    response: string; 
    result: any; 

    constructor(message: string, status: number, response: string, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.result = result;
    }
}