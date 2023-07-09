// Função de busca binária
function binarySearchFunc(arr, logToSearch) {
	let start = 0, end = arr.length - 1;
	
	while (start <= end) {
	  let mid = Math.floor((start + end) / 2);
	  
	  if (arr[mid].log === +logToSearch) {
		return console.log('Log encontrado!', logToSearch);
	  } else if (arr[mid].log < +logToSearch) {
		start = mid + 1;
	  } else {
		end = mid - 1;
	  }
	}
	
	return console.log('Log não encontrado!', logToSearch);
  }

class HashTable {
	constructor() {
	  this.table = {};
	}
  
	insert(key, value) {
	  if (!this.table[key]) {
			this.table[key] = new HashTable();
	  }
	  this.table[key].table[value] = value;
	}
  
	get(key) {
	  return this.table[key];
	}
  
	searchValue(value) {
	  for (const key in this.table) {
			if (this.table[key].table[value]) {
				return { month: key, log: value };
			}
	  }
	  return null;
	}

  	searchByMonthAndLog(month, log) {
		const monthLogs = this.get(month);
		const result = [];
		if (monthLogs) {
			for (const key in monthLogs.table) {
				if (monthLogs.table[key] === log) {
					result.push({ month, log });
				}
			}
		}
		if (result.length > 0) {
			return result;
		} else {
			binarySearchFunc(data, log);
			return [];
		}
	}

	searchByLog(log) {
		const result = [];
		for (const key in this.table) {
			const monthLogs = this.table[key].table;
			if (monthLogs[log]) {
				result.push({ month: key, log });
			}
		}
		if (result.length > 0) {
			return result;
		} else {
			binarySearchFunc(data, log);
			return [];
		}
	}
}

const monthSorter = (mN) => {
    let res = 0;
    switch (mN) {
        case 1:
            res = 'January';
            break;
        case 2:
            res = 'February';
            break;
        case 3:
            res = 'March';
            break;
        case 4:
            res = 'April';
            break;
        case 5:
            res = 'May';
            break;
        case 6:
            res = 'June';
            break;
        case 7:
            res = 'July';
            break;
        case 8:
            res = 'August';
            break;
        case 9:
            res = 'September';
            break;
        case 10:
            res = 'October';
            break;
        case 11:
            res = 'November';
            break;
        case 12:
            res = 'December';
            break;
        default:
            break;
		}
		
		return res;
	};
	
let arr = [ 
	{
		month: 'April',
		log: 300,
		msg: 'Use the digital TCP bandwidth, then you can parse the mobile microchip!',
		user: 'Vesta90'
	},
	{
		month: 'December',
		log: 300,
		msg: 'Use the digital TCP bandwidth, then you can parse the mobile microchip!',
		user: 'Vesta90'
	},
	{
		month: 'March',
		log: 807,
		msg: "connecting the bandwidth won't do anything, we need to calculate the 1080p JSON program!",
		user: 'Bernadine_Buckridge'
	},
	{
		month: 'November',
		log: 887,
		msg: 'If we override the firewall, we can get to the USB protocol through the primary SAS circuit!',
		user: 'Rory_Halvorson4'
	},
	{
		month: 'April',
		log: 1907,
		msg: 'Try to calculate the CSS driver, maybe it will navigate the optical bus!',
		user: 'Sierra4'
	},
	{
		month: 'July',
		log: 1971,
		msg: 'If we program the driver, we can get to the JBOD interface through the cross-platform TLS alarm!',
		user: 'Leanna.Cole97'
	},
	{
		month: 'May',
		log: 3500,
		msg: 'We need to calculate the mobile DRAM program!',
		user: 'Delphine.Kertzmann'
	},
	{
		month: 'June',
		log: 6156,
		msg: 'The HDD system is down, transmit the auxiliary transmitter so we can reboot the IP monitor!',
		user: 'Vallie_Braun3'
	},
	{
		month: 'November',
		log: 6925,
		msg: "I'll navigate the multi-byte API capacitor, that should alarm the SSL hard drive!",
		user: 'Melvin24'
	},
	{
		month: 'June',
		log: 14076,
		msg: 'The SSL microchip is down, copy the back-end interface so we can synthesize the ADP application!',
		user: 'Junius.DAmore33'
	},
	{
		month: 'February',
		log: 14874,
		msg: 'If we quantify the firewall, we can get to the XML driver through the redundant XML microchip!',
		user: 'Kolby_Durgan'
	},
	{
		month: 'March',
		log: 15929,
		msg: "I'll quantify the neural SMS application, that should pixel the HTTP application!",
		user: 'Alexie3'
	},
	{
		month: 'October',
		log: 16443,
		msg: 'If we generate the circuit, we can get to the THX card through the primary SSL hard drive!',
		user: 'Floyd61'
	},
	{
		month: 'July',
		log: 16484,
		msg: "I'll generate the primary API bandwidth, that should bandwidth the EXE array!",
		user: 'Jenifer_Mueller'
	},
	{
		month: 'November',
		log: 16489,
		msg: 'Use the bluetooth GB monitor, then you can quantify the bluetooth capacitor!',
		user: 'Margarett5'
	},
	{
		month: 'December',
		log: 16616,
		msg: 'We need to copy the open-source IB microchip!',
		user: 'Alexys.Bailey'
	},
	{
		month: 'September',
		log: 19250,
		msg: "I'll parse the neural JBOD feed, that should system the DRAM system!",
		user: 'Augustus_Schmitt'
	},
	{
		month: 'July',
		log: 19423,
		msg: 'We need to compress the primary CSS microchip!',
		user: 'Cordia_Nolan15'
	},
	{
		month: 'November',
		log: 24316,
		msg: 'The SMTP capacitor is down, transmit the multi-byte interface so we can parse the EXE driver!',
		user: 'Kiera_Abbott'
	},
	{
		month: 'April',
		log: 26340,
		msg: 'We need to compress the wireless DRAM interface!',
		user: 'Michel31'
	},
	{
		month: 'August',
		log: 27019,
		msg: "You can't hack the capacitor without backing up the wireless IP circuit!",
		user: 'Bertha37'
	},
	{
		month: 'December',
		log: 27792,
		msg: 'We need to generate the cross-platform RAM monitor!',
		user: 'Orlo.Feeney'
	},
	{
		month: 'March',
		log: 30022,
		msg: 'If we generate the sensor, we can get to the SDD hard drive through the solid state XML feed!',
		user: 'Candida_Hegmann'
	},
	{
		month: 'January',
		log: 32023,
		msg: "You can't parse the interface without parsing the wireless XML sensor!",
		user: 'Dorothea_Lueilwitz78'
	},
	{
		month: 'January',
		log: 34683,
		msg: "copying the feed won't do anything, we need to reboot the back-end THX system!",
		user: 'Estevan6'
	},
	{
		month: 'June',
		log: 35487,
		msg: 'The HEX hard drive is down, copy the mobile pixel so we can copy the COM bus!',
		user: 'Verla37'
	},
	{
		month: 'April',
		log: 40209,
		msg: 'Use the cross-platform TCP transmitter, then you can override the 1080p monitor!',
		user: 'Jalyn77'
	},
	{
		month: 'June',
		log: 41204,
		msg: 'The UTF8 pixel is down, index the open-source pixel so we can index the ADP firewall!',
		user: 'Darwin.Rolfson1'
	},
	{
		month: 'June',
		log: 41599,
		msg: 'Use the auxiliary ASCII matrix, then you can compress the haptic card!',
		user: 'Georgianna_Quigley61'
	},
	{
		month: 'November',
		log: 41884,
		msg: 'We need to back up the 1080p SMS system!',
		user: 'Magnolia71'
	},
	{
		month: 'October',
		log: 45921,
		msg: 'If we synthesize the sensor, we can get to the EXE card through the cross-platform VGA application!',
		user: 'Deja31'
	},
	{
		month: 'June',
		log: 47242,
		msg: "I'll compress the online AGP capacitor, that should driver the RSS array!",
		user: 'Lonnie_Wolff7'
	},
	{
		month: 'May',
		log: 47371,
		msg: "I'll synthesize the auxiliary IP panel, that should monitor the RAM bandwidth!",
		user: 'Kenneth_Ankunding47'
	},
	{
		month: 'April',
		log: 48794,
		msg: 'We need to copy the back-end RAM microchip!',
		user: 'Jaiden.Rath'
	},
	{
		month: 'August',
		log: 48998,
		msg: "transmitting the application won't do anything, we need to index the virtual UDP pixel!",
		user: 'Laurence_Kuhic'
	},
	{
		month: 'May',
		log: 50403,
		msg: "generating the driver won't do anything, we need to quantify the haptic JBOD interface!",
		user: 'Morton42'
	},
	{
		month: 'May',
		log: 53620,
		msg: "You can't calculate the bus without compressing the solid state USB panel!",
		user: 'Quinn.Runolfsdottir'
	},
	{
		month: 'February',
		log: 54647,
		msg: "You can't compress the alarm without programming the optical SMS monitor!",
		user: 'Natalie.Feeney'
	},
	{
		month: 'October',
		log: 55132,
		msg: "parsing the application won't do anything, we need to program the mobile CSS microchip!",
		user: 'Rigoberto_Marquardt36'
	},
	{
		month: 'July',
		log: 55996,
		msg: 'If we generate the card, we can get to the COM port through the online ADP matrix!',
		user: 'Norwood58'
	},
	{
		month: 'December',
		log: 56230,
		msg: 'We need to compress the neural COM application!',
		user: 'Rex_Bogan70'
	},
	{
		month: 'March',
		log: 56687,
		msg: 'Use the 1080p SQL hard drive, then you can program the online transmitter!',
		user: 'Kamren_Greenholt93'
	},
	{
		month: 'December',
		log: 56756,
		msg: "I'll synthesize the back-end USB firewall, that should bandwidth the TLS card!",
		user: 'Donald.Torphy'
	},
	{
		month: 'September',
		log: 56939,
		msg: 'Use the virtual COM panel, then you can input the mobile feed!',
		user: 'Selmer.Reilly0'
	},
	{
		month: 'March',
		log: 60507,
		msg: 'Use the bluetooth VGA monitor, then you can transmit the primary program!',
		user: 'Christina.Corkery'
	},
	{
		month: 'July',
		log: 62455,
		msg: "transmitting the array won't do anything, we need to generate the primary XSS feed!",
		user: 'Branson.Hayes'
	},
	{
		month: 'October',
		log: 62475,
		msg: 'If we back up the card, we can get to the SMS application through the digital SSD bandwidth!',
		user: 'Yasmine.Conn19'
	},
	{
		month: 'June',
		log: 68549,
		msg: "compressing the interface won't do anything, we need to navigate the back-end IP port!",
		user: 'Gina.Barton'
	},
	{
		month: 'February',
		log: 70177,
		msg: 'If we connect the interface, we can get to the OCR feed through the cross-platform EXE card!',
		user: 'Terry_Schowalter'
	},
	{
		month: 'April',
		log: 71472,
		msg: "synthesizing the bus won't do anything, we need to program the virtual TCP alarm!",
		user: 'Misty.Hermiston'
	},
	{
		month: 'February',
		log: 71511,
		msg: 'Try to transmit the CLI firewall, maybe it will input the back-end program!',
		user: 'Leila69'
	},
	{
		month: 'December',
		log: 72842,
		msg: 'We need to navigate the online SAS pixel!',
		user: 'Ursula84'
	},
	{
		month: 'June',
		log: 74115,
		msg: 'The DRAM system is down, synthesize the auxiliary alarm so we can navigate the AI microchip!',
		user: 'Ethan32'
	},
	{
		month: 'March',
		log: 77964,
		msg: 'We need to calculate the optical SAS bus!',
		user: 'Abbie.Beer97'
	},
	{
		month: 'March',
		log: 82200,
		msg: "indexing the circuit won't do anything, we need to back up the primary PNG monitor!",
		user: 'Jalen_Kshlerin'
	},
	{
		month: 'December',
		log: 82375,
		msg: "compressing the bandwidth won't do anything, we need to override the redundant JSON protocol!",
		user: 'Archibald.Cronin'
	},
	{
		month: 'August',
		log: 82643,
		msg: "I'll hack the optical SQL microchip, that should transmitter the HDD driver!",
		user: 'Krista_King94'
	},
	{
		month: 'October',
		log: 82909,
		msg: "You can't program the program without generating the primary DNS sensor!",
		user: 'Amalia.Kihn75'
	},
	{
		month: 'May',
		log: 83418,
		msg: 'Use the online SDD array, then you can transmit the neural monitor!',
		user: 'Ali_Braun'
	},
	{
		month: 'November',
		log: 84232,
		msg: "generating the interface won't do anything, we need to override the virtual IB interface!",
		user: 'Markus.Williamson'
	},
	{
		month: 'December',
		log: 84287,
		msg: "You can't generate the array without synthesizing the solid state RAM sensor!",
		user: 'Vincenza_Bins'
	},
	{
		month: 'March',
		log: 85189,
		msg: 'If we navigate the card, we can get to the RSS interface through the solid state AI program!',
		user: 'Claudia_Thiel89'
	},
	{
		month: 'July',
		log: 86197,
		msg: 'If we compress the interface, we can get to the AI alarm through the online DRAM program!',
		user: 'Ed_Howell81'
	},
	{
		month: 'November',
		log: 87132,
		msg: "I'll connect the auxiliary CSS panel, that should interface the VGA transmitter!",
		user: 'Clovis11'
	},
	{
		month: 'January',
		log: 87607,
		msg: "backing up the card won't do anything, we need to reboot the online IB circuit!",
		user: 'Maxine51'
	},
	{
		month: 'October',
		log: 87748,
		msg: "You can't connect the feed without calculating the mobile TCP transmitter!",
		user: 'Denis.Okuneva71'
	},
	{
		month: 'March',
		log: 91783,
		msg: 'We need to transmit the bluetooth RAM program!',
		user: 'Juliet.Metz'
	},
	{
		month: 'August',
		log: 93461,
		msg: 'We need to bypass the back-end TLS feed!',
		user: 'Karson_Thiel71'
	},
	{
		month: 'May',
		log: 93766,
		msg: "generating the application won't do anything, we need to quantify the wireless TCP hard drive!",
		user: 'Cesar_Hilpert'
	},
	{
		month: 'September',
		log: 94332,
		msg: 'Try to reboot the COM pixel, maybe it will parse the back-end hard drive!',
		user: 'Amos_Hermann67'
	},
	{
		month: 'April',
		log: 94865,
		msg: "hacking the hard drive won't do anything, we need to generate the mobile SMTP alarm!",
		user: 'Brigitte_Davis'
	},
	{
		month: 'June',
		log: 97537,
		msg: "compressing the transmitter won't do anything, we need to index the online SMS alarm!",
		user: 'Matilda_Paucek31'
	},
	{
		month: 'September',
		log: 99362,
		msg: 'Try to back up the SAS pixel, maybe it will input the haptic system!',
		user: 'Delilah.Skiles'
	}
]

const hashTable = new HashTable();
arr.forEach(obj => {
	const { month, log } = obj;
	hashTable.insert(month, log);
});
  

const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
  });
  
  function searchByMonthAndLogMenu() {
  rl.question("Qual o mês? (Número) ", function (month) {
    rl.question("Qual o log? (Número) ", function (log) {
      const results = hashTable.searchByMonthAndLog(monthSorter(month), log);
      console.log(results);
      rl.close();
    });
  });
}

function searchByLogMenu() {
  rl.question("Qual o log? (Número) ", function (log) {
    const results = hashTable.searchByLog(log);
    console.log(results);
    rl.close();
  });
}

function mainMenu() {
  rl.question(
    "Selecione uma opção:\n1. Buscar por mês e log\n2. Buscar por log em todos os meses\nOpção: ",
    function (option) {
      if (option === "1") {
        searchByMonthAndLogMenu();
      } else if (option === "2") {
        searchByLogMenu();
      } else {
        console.log("Opção inválida!");
        rl.close();
      }
    }
  );
}

mainMenu();
