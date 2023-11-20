$(document).ready(function () {     //ใช้เพื่อตรวจสอบว่าเอกสาร HTML ได้โหลดเสร็จสมบูรณ์แล้วก่อนที่จะทำการดำเนินการต่อ//
  $(window).scroll(function () {    //ใช้ตรวจสอบเมื่อผู้ใช้เลื่อนหน้าเว็บ////
    //  sticky navbar on scroll script  // 
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }   //โค้ดนี้ทำให้ Navbar กลายเป็น "stickyก็คือแถบน้ำเงิน" เมื่อผู้ใช้เลื่อนหน้าเว็บลงมา 20 พิกเซลขึ้นไป//

    //  scroll-up button show/hide script  //
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");   //"show" ในปุ่ม "scroll-up" เมื่อการสกรอลเลื่อนมีค่ามากกว่า 500 พิกเซล//
    } else {
      $(".scroll-up-btn").removeClass("show");  // ลบคลาส "show" ออกจากปุ่ม "scroll-up" เมื่อการสกรอลมีค่าน้อยกว่าหรือเท่ากับ 500 พิกเซล//
    }
  });


  //  slide-up script  //
  $(".scroll-up-btn").click(function () {
    document.body.scrollIntoView({ behavior: 'smooth' });   // ให้เอกสาร HTML ทำการ animate การสกรอลให้กลับไปที่ด้านบนของหน้าเว็บ //

    //  removing smooth scroll on slide-up button click  //
    $("html").css("scrollBehavior", "auto");  // เอาคุณสมบัติ smooth scroll ออก//
  });

  $(".navbar .menu li a").click(function () {   //เลือกทุกรายการลิงก์ที่อยู่ภายใน li ของเมนูที่มีคลาส "menu" ภายใน Navbar(พวกเมนูเลือก).จับเหตุการณ์คลิกที่เกิดขึ้นเมื่อมีการคลิกที่ลิงก์ภายในเมนู//

    $("html").css("scrollBehavior", "smooth");  //ทำให้การเลื่อนหน้าเว็บเป็นไปอย่างนุ่มนวล (smooth scroll)//
  });

  //  Toggle Navbar  //

  $(".menu-btn").click(function () {    //จับเหตุการณ์คลิกที่เกิดขึ้นเมื่อมีการคลิกที่ปุ่มเมนูที่มีคลาส "menu-btn"//
    $(".navbar .menu").toggleClass("active"); //เพิ่มหรือลบคลาส "active" จากเมนูที่อยู่ใน Navbar (☰)ทำให้เมนูเปิดหรือปิดตามสถานะปัจจุบัน (เวลาย่อจอสสามารถกดได้)//
    $(".menu-btn i").toggleClass("active");   // เพิ่มหรือลบคลาส "active" จากไอคอนที่อยู่ในปุ่มเมนู (☰)ทำให้ไอคอนเปลี่ยนรูปแบบเมื่อเมนูถูกเปิดหรือปิด//
  });

  //  Typing Text Animation  //

  var typed = new Typed(".typing", {  //// เลือก element ที่ต้องการให้มี animation (ในที่นี้คือ element ที่มี class "typing")//
    strings: [
      "my resume",
      "my html,css and javascript portfolio",
    ],
    typeSpeed: 100, // ความเร็วในการพิมพ์อักขระ //
    backSpeed: 60,  //ความเร็วในการลบอักขระ//
    loop: true      //ให้ animation วนลูป//
  });




  //  Owl Carousel (รูปตรง Reearch) //

  $(".carousel").owlCarousel({
    margin: 20,     //   ระยะห่างระหว่างรูปภาพใน carousel //
    loop: false,     // ให้ carousel วนลูป//
    autoplay: true, // ให้ carousel เล่นอัตโนมัติ//
    autoplayTimeOut: 2000,      // เวลาที่รูปภาพใน carousel จะเปลี่ยน (milliseconds)//
    autoplayHoverPause: true,   // หยุดเล่นเมื่อนำเมาส์ไปวางเหนือ carousel//
    responsive: {               //การตั้งค่าความสามารถของเว็บไซต์การปรับการแสดงผลของเนื้อหาตามขนาดหน้าจอของอุปกรณ์ที่กำลังใช้งาน//
      0: {
        items: 1,     // จำนวนรูปภาพที่แสดงใน carousel ขนาดหน้าจอ 0px - 599px //
        nav: false    // ไม่แสดงปุ่มนำทาง (navigation) เนื่องจาก nav: false//
      },
      600: {
        items: 2,   // จำนวนรูปภาพที่แสดงใน carousel ขนาดหน้าจอ 600px - 999px //
        nav: false  // จำนวนรูปภาพที่แสดงใน carousel ขนาดหน้าจอ 1000px ขึ้นไป //
      }
    }
  });
});
