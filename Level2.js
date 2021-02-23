class Level2 {
    constructor(){
    Mbottle.image = loadImage("Cloth Bag.png");

    this.box1 = new PlasticBag(800,570,40,40);
    this.box2 = new PlasticBag(820,570,40,40);
    this.box3 = new PlasticBag(850,570,40,40);

    this.box5 = new PlasticBag(814.5,500,35,35);
    this.box6 = new PlasticBag(839.5,500,35,35);

    this.box8 = new PlasticBag(829.5,480,30,30);

    
    this.box11 = new PlasticBag(960,240,40,40);
    this.box12 = new PlasticBag(1010,240,40,40);
    this.box13 = new PlasticBag(980,240,40,40);

    this.box14 = new PlasticBag(970.5,220,35,35);
    this.box15 = new PlasticBag(990.5,220,35,35);

    this.box16 = new PlasticBag(980.5,200,30,30);

    this.base1 = new Ground(850,600,300,10);
    this.base2 = new Ground(980,250,200,10);
    }

    display(){
        this.box1.display();
        this.box2.display();
        this.box3.display();

        this.box5.display();
        this.box6.display();

        this.box8.display();

        this.box11.display();
        this.box12.display();
        this.box13.display();

        this.box14.display();
        this.box15.display();

        this.box16.display();

        this.base1.display();
        this.base2.display();
    }

    destroy(){
        this.box1.destroy();
        this.box2.destroy();
        this.box3.destroy();

        this.box5.destroy();
        this.box6.destroy();

        this.box8.destroy();

        this.box11.destroy();
        this.box12.destroy();
        this.box13.destroy();

        this.box14.destroy();
        this.box15.destroy();

        this.box16.destroy();

        //this.base1.destroy();
        //this.base2.destroy();
    }

    score(){
        this.box1.score();
        this.box2.score();
        this.box3.score();

        this.box5.score();
        this.box6.score();

        this.box8.score();

        this.box11.score();
        this.box12.score();
        this.box13.score();

        this.box14.score();
        this.box15.score();

        this.box16.score();
    }
}