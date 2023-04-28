const customersData = [
    {
      customer_id: 'C000001',
      name: 'สุพิชชา คุ้มวงศ์',
      phone: '0846738302',
      gender: 'famale',
      address: '109/225 Phaholyothin 52 Rd. Bang Khen Bangkok 10220',
    },
    {
      customer_id: 'C000002',
      name: 'ปัณฑ์ สุขเกษม',
      phone: '0345738723',
      gender: 'male',
      address: '248/5 Suphasarn Rangsan Rd. Hat Yai Songkhla 90110',
    },
    {
      customer_id: 'C000003',
      name: 'ศศิรา โชตวาณิช',
      phone: '0524462135',
      gender: 'famale',
      address:
        '946 Room 603 6Th Floor Dusit Thani Building Rama 4 Road Silom Bangrak Bangkok 10500',
    },
    {
      customer_id: 'C000004',
      name: 'วริศ จันทรพร ',
      phone: '0647632477',
      gender: 'male',
      address: '219 Soi Nana Tai Sukhumvit Khlong Toei Khlong Toei Bangkok 10110',
    },
    {
      customer_id: 'C000005',
      name: 'ณัฏฐ์ ธรรมวงศ์ ',
      phone: '0347583452',
      gender: 'male',
      address: '1524/9 Phibulsongkram Bang Sue Bang Sue Bankok 10800',
    },
    {
      customer_id: 'C000006',
      name: 'ฉันท์สินี ปัทมเดชา',
      phone: '0935487760',
      gender: 'famale',
      address: '32/3 Soi Phrommitr Sukhumvit Road Klongton Wattana Bangkok 10110',
    },
    {
      customer_id: 'C000007',
      name: 'กรชวัล ภัชรปรีดา',
      phone: '0843967336',
      gender: 'male',
      address:
        'Bangkok City Tower, 179/3 South Sathorn Rd., Thungmahamek Bangkok 10120',
    },
    {
      customer_id: 'C000008',
      name: 'กัญพัชญ์ อุดมทรัพย์',
      phone: '0998762351',
      gender: 'famale',
      address: '270/11 Prachathipok Road Wat Kalayanimitr Thonburi Bangkok 10600',
    },
    {
      customer_id: 'C000009',
      name: 'สุภิญญา ศรีสุข ',
      phone: '0934673124',
      gender: 'famale',
      address: '90 Soi Wat Paingern Chan Rd Thung Wat Don Sathon Bangkok 10120',
    },
    {
      customer_id: 'C000010',
      name: 'กมลฉันท์ ศิริไล',
      phone: '0735482152',
      gender: 'famale',
      address:
        '522/163 Soi Songprang Asoke-Dindaeng Din Daeng Din Daeng Bangkok 10320',
    },
  ]
  
  // https://www.kassini.co.th/product/
  const productsData = [
    {
      product_id: 'P000001',
      name: 'DELI E7536 ยางลบแฟนซี',
      price: 4,
      amount: 1000,
      description:
        'ผลิตจาก PVC คุณภาพดี  ปลอดสารพิษ NON-Toxic ลบง่าย สะอาดกว่า  ราคาประหยัด  สินค้าคุณภาพ จากผู้ผลิตโดยตรง',
      image: '7536-Box-300x300.png',
    },
    {
      product_id: 'P000002',
      name: 'DL U715 ดินสอกด0.5mm (4สี)',
      price: 22,
      amount: 1000,
      description:
        'ดินสอกดพลาสติกทรงกลม ลายแฟนซี ดีไซต์ทันสมัย น่าใช้งาน ใช้งานง่าย พกพาสะดวก ไส้ดินสอขนาด 0.5mm',
      image: 'U715-510x510.png',
    },
    {
      product_id: 'P000003',
      name: 'DELI 6055 กรรไกร(เหลือง)',
      price: 111,
      amount: 1000,
      description:
        'ผลิตจากเทฟล่อนคุณภาพสูง ใช้งานได้ทนทาน ปลอดภัยเพราะเคลือบด้วยเทฟล่อน จึงปราศจากจากเชื้อโรค สามารถใช้ตัดอาหารได้ ด้ามจับหุ้มด้วยยาง ใช้งานไม่เจ็บมือ ทำความสะอาดง่าย ไม่เป็นสนิม',
      image: 'E2E6055-510x510.jpg',
    },
    {
      product_id: 'P000004',
      name: 'DELI 0358 BK เครื่องเย็บกระดาษ30แผ่น(สีดำ)',
      price: 245,
      amount: 1000,
      description: 'ใช้สำหรับเย็บกระดาษ',
      image: '0358-BLK.png',
    },
    {
      product_id: 'P000005',
      name: 'DELI Q03336 DL ปากกากด0.7(น้ำเงิน)',
      price: 310,
      amount: 1000,
      description:
        'ขนาดเส้น 0.7 มิลลิเมตร หมึกสีน้ำเงิน แบบกดเปิด/ปิด ใช้งานสะดวก  จับสบายนิ้ว',
      image: 'E1EQ03336-800x800.jpg',
    },
    {
      product_id: 'P000006',
      name: 'DELI 8004 แท่นไม้ตัดกระดาษ ขนาด 300×250 มิลลิเมตร',
      price: 1275,
      amount: 1000,
      description: 'ใช้สำหรับตัดกระดาษ',
      image: '8004-2-800x800.jpg',
    },
    {
      product_id: 'P000007',
      name: 'DELI 5526E ซองซิปใสA4 PVC',
      price: 28,
      amount: 1000,
      description:
        'ทำจากวัสดุพีวีซีที่เหนือกว่าฝีมือดีเพื่อความทนทานสามารถถูกใช้เป็นเวลานาน กันน้ำช่วยให้เอกสารของคุณสะอาดและแห้ง มีการเลื่อนปิดสะดวกมากถึงเปิดและปิด',
      image: '5526.jpg',
    },
    {
      product_id: 'P000008',
      name: 'DELI 0620 เครื่องเหลาดินสอแบบยึดโต๊ะ',
      price: 315,
      amount: 1000,
      description:
        'ผลิตจากวัสดุคุณภาพดี ตัวเครื่องผลิตจากพลาสติกเนื้อดีและเหล็กชุบโครเมียม แข็งแรง สีสด',
      image: '0620-28.webp',
    },
    {
      product_id: 'P000009',
      name: 'DELI 38014 ไม้บรรทัดงอได้แบบสั้น20cm',
      price: 19,
      amount: 1000,
      description:
        'ใช้งานได้เหมือนไม้บรรทัดปกติ ความยาวขนาด 20 เซนติเมตร หรือ 8 นิ้ว ปลอดภัยเพราะไม่มีสารเคมี สีสันสดใส น่าใช้งาน',
      image: 'E6E38014-800x800.jpg',
    },
    {
      product_id: 'P000010',
      name: 'DELI 1710E เครื่องคิดเลขวิทยาศาสตร์ 12 หลัก',
      price: 300,
      amount: 1000,
      description:
        'หน้าจอสามารถแสดงได้ถึง 240 ฟังก์ชั่น ฟังก์ชั่น ANS ตรวจสอบและแก้ไขฟังก์ชั่น ฟังก์ชันเลขคณิตเศษส่วน  การคำนวณค่าเบี่ยงเบนมาตรฐานหรือไม่ การแปลงพิกัด  แก้ไขข้อมูลหรือไม่ คำนวณอย่างต่อเนื่อง หน่วยความจำ function10 ตัวแปร การคำนวณสถิติ',
      image: 'E1710-2-800x800.jpg',
    },
    {
      product_id: 'P000011',
      name: 'DL H911 กระเป๋าดินสอ',
      price: 85,
      amount: 1000,
      description:
        'กระเป๋าสำหรับใส่อุปกรณ์เครื่องเขียนต่างๆ กระเป๋าทรงสี่เหลี่ยม ดีไซต์ทันสมัย น่าใช้งาน สีพาสเทลสดใส น่าใช้งาน',
      image: 'H911-2.jpg',
    },
    {
      product_id: 'P000012',
      name: 'DL H355 เทปลบคำผิด 20m.(2สี)',
      price: 45,
      amount: 1000,
      description:
        'เนื้อเทปออกสม่ำเสมอ ติดกระดาษได้แน่นสนิท ไม่ขาดตอน ลบได้เนียนใช้ได้จนหมดม้วน แก้ไขคำผิดจากหมึกทุกชนิด',
      image: 'H355.png',
    },
    {
      product_id: 'P000013',
      name: 'DL H602 ชุดวงเวียน',
      price: 70,
      amount: 1000,
      description:
        'ใช้งานง่าย พกพาสะดวก สีพาสเทลสุดน่ารักน่าใช้งาน มาตราส่วนชัดเจนและอ่านง่าย เหมาะสำหรับนักเรียน นักศึกษา',
      image: 'H602-pink.png',
    },
    {
      product_id: 'P000014',
      name: 'DL G00803 ชุดเรขาคณิต 15cm.',
      price: 30,
      amount: 1000,
      description:
        '1 ชุดมี 4 ชิ้น ไม้บรรทัด 15 เซนติเมตร/ 6 นิ้ว; 45/45/90 ชุดสามเหลี่ยม; 30/60/90 ชุดสามเหลี่ยม; ไม้โปรแทรกเตอร์ 180°',
      image: 'G00803-blue.jpg',
    },
    {
      product_id: 'P000015',
      name: 'DL U12-6C ชุดไฮไลท์(6สี/6ด้าม)',
      price: 95,
      amount: 1000,
      description:
        'ชุดไฮไลท์แบบเน้นข้อความหัวตัด แพ็ค 6 แท่ง 6 สี โทนสีพาสเทลสบายตา สีพาสเทลสุดน่ารักสดใส น่าใช้งาน',
      image: 'U126C.png',
    },
    {
      product_id: 'P000016',
      name: 'DELI R10904 เครื่องเหลาดินสอ',
      price: 155,
      amount: 1000,
      description:
        'ใบมีดผลิตจากเหล็กแบบเกลียวหมุน แข็งแรง คมทน คมนาน ที่จับหมุนได้ง่าย จับกระชับมือ',
      image: 'E1ER10904-Blue-800x800.jpg',
    },
    {
      product_id: 'P000017',
      name: 'DELI 38166 กระเป๋าแฟ้มหูหิ้วSW A4/2P',
      price: 200,
      amount: 1000,
      description:
        'ใช้สำหรับใส่อุปกรณ์การเรียน หรือเก็บเอกสาร มีช่องขนาดใหญ่ 2 ช่อง หูหิ้วแข็งแรง รับน้ำหนักได้มาก ลายการ์ตูน Super Wings',
      image: '1E38166-BLU-800x800.png',
    },
    {
      product_id: 'P000018',
      name: 'DELI A20700 กาวแท่ง 8g.',
      price: 14,
      amount: 1000,
      description:
        'เนื้อกาวติดง่าย ติดเรียบ ไม่เลอะเทอะ ไม่ทำให้กระดาษย่น ฝาเกลียวปิดสนิท ไม่มีปัญหากาวหดตัว ปราศจากสารพิษ ปลอดภัย และไม่มีกลิ่นฉุน สำหรับงานติดกระดาษทั่วไป รูปภาพ และงานฝีมืออื่นๆ เนื้อกาวสีใส',
      image: 'EA20700-1-800x800.png',
    },
    {
      product_id: 'P000019',
      name: 'DELI 7894 กระดานไวท์บอร์ด 525x630mm.',
      price: 2501,
      amount: 1000,
      description:
        'Magnetic Board 2 Sides กระดานไวท์บอร์ด2 ด้าน ใช้เป็นสื่อการเรียนการสอนสำหรับเด็กๆ และให้เด็กๆ ได้วาดภาพสร้างจินตนาการ กระดานวาดภาพจะเป็นกระดานดำ 1 ด้านกระดานไวท์บอร์ด 1 ด้าน ในชุดจะมี 1.แม่เหล็ก 2.ชอล์ก 3.ปากกาเมจิค 4.แปรงลบกระดานเหมาะสำหรับเด็กอายุ 2 ปีขึ้นไป สินค้าราคาประหยัด สินค้าคุณภาพดี รับประกันจากผู้ผลิตโดยตรง',
      image: '7894-8.jpg',
    },
    {
      product_id: 'P000020',
      name: 'DELI 2034 คัตเตอร์',
      price: 32,
      amount: 1000,
      description:
        'ด้ามสเตนเลสหุ้มพลาสติก แข็งแรง ทนทาน จับกระชับ ไม่ลื่นมือ ใบมีดสเตนเลส มีความคม ทำมุมเฉียง 45 องศา หักได้ 12 ครั้ง ระบบล็อคใบมีดอัตโนมัติ ช่วยป้องกันใบมีดเลื่อนกลับขณะใช้งาน ช่องเก็บใบมีดสำรองในตัว ง่ายในการเปลี่ยนใช้งานได้อย่างต่อเนื่อง คลิปหนีบ สะดวกต่อการพกพา เป็นที่หักใบมีดในตัว',
      image: 'E2034-4-800x800.jpg',
    },
  ]
  
  module.exports = {
    customersData,
    productsData,
  }
  
  