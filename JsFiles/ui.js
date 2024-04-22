

export class DispalyData{
    constructor(data){
        this.data=data;

    }
    display(){
        let cartona=''
        let fetchedData= this.data;
        
        for (let i = 0; i < fetchedData.length; i++) {
            let el = fetchedData[i];
            // console.log(el);
            cartona +=`
            <div class="col-xl-3 col-lg-4 col-md-6">
            <div id="${el.id}" class="card border-black  pb-1">
              <img src="${el.thumbnail}" class="card-img-top w-100 px-3 pt-3" alt="">
              <div class="card-body  px-3">
                <div class=" d-flex justify-content-between">
                  <h4 class="text-capitalize fs-5 font2">${el.title}</h4>
                  <span class="bg-primary rounded-3 fw-semibold fs-6 py-1 px-2 text-capitalize font1">free</span>
                </div>
                <p class="text-secondary shortDesc text-center font1 fw-bold">${el.short_description}</p>
                
              </div>
              <div class="card-footer bg-transparent d-flex justify-content-between py-2 border-black">
                <span class="fs-sm rounded-3 bg-body-secondary font1 fw-semibold p-1">${el.genre}</span>
                <span class="fs-sm rounded-3 bg-body-secondary font1 fw-semibold p-1">${el.platform}</span>
              </div>
            </div>
          </div>
            `
        }
        return cartona ;
    }
}

export class DisplayDetails{
    constructor(data){
        this.data=data;

    }
    display(){
        console.log(this.data);
        let details= this.data;
        let cartona =` <div class="col-md-4 col-12">
        <img src="${details.thumbnail}" class="w-100" alt="game image">
      </div>
      <div class="col-md-8 col-12">
        <h2 class="font1 my-2  letter_spacing">Title: ${details.title}</h2>
        <h5 class="font1 my-3 py-1  letter_spacing">Category: <span class="rounded-3 fs-sm2 bg3 text-black py-1 px-2">${details.genre}</span></h5>
        <h5 class="font1 my-3 py-1  letter_spacing">Platform: <span class="rounded-3 fs-sm2 bg3 text-black py-1 px-2">${details.platform}</span></h5>
        <h5 class="font1 my-3 py-1  letter_spacing">Status: <span class="rounded-3 fs-sm2 bg3 text-black py-1 px-2">${details.status}</span></h5>
        <p class="font1" >${details.description}</p>
        <button class="font1 btn btn-outline-warning text-white py-2 px-3">Show Game</button>
      </div>`

        return cartona;

    }
}

