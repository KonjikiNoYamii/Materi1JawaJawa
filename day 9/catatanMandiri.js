`javascript`
// ===========================
// JAVASCRIPT OBJECTS GUIDE
// ===========================
// Fokus utama: 80% pemula, 20% lanjutan.
// Tujuan: Memberikan pemahaman dari dasar hingga sekilas advanced.

// ===========================
// 1. PEMULA (80% konten)
// ===========================

// 1.1 Membuat object dasar
let person = {
  name: "Alice",    // property key: value
  age: 25,
  isStudent: true
};

// 1.2 Akses nilai object
console.log(person.name);      // dot notation → lebih umum, mudah dibaca
console.log(person["age"]);    // bracket notation → berguna jika key pakai spasi atau variabel

// 1.3 Menambahkan property baru
person.gender = "Female";      // dengan dot notation
person["country"] = "Japan";   // dengan bracket notation

// 1.4 Menghapus property
delete person.isStudent;

// 1.5 Nested object (object di dalam object)
let student = {
  id: 101,
  profile: {
    firstName: "Bob",
    lastName: "Smith"
  }
};
console.log(student.profile.firstName); // akses nested

// 1.6 Looping object
// Object tidak bisa di-loop langsung dengan for...of, gunakan for...in
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// 1.7 Tools bawaan penting
console.log(Object.keys(person));   // semua key dalam array
console.log(Object.values(person)); // semua value dalam array
console.log(Object.entries(person));// pasangan key-value

// 1.8 Array of Objects (sering dipakai di real project)
let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

users.forEach(user => {
  console.log(`${user.id} - ${user.name}`);
});

// 1.9 Method di dalam object
let car = {
  brand: "Toyota",
  model: "Yaris",
  start: function () {
    console.log("Car started!");
  }
};
car.start();

// 1.10 Shorthand method (lebih ringkas)
let dog = {
  name: "Pochi",
  bark() {
    console.log("Woof!");
  }
};
dog.bark();

// 1.11 Object destructuring
let { name, age } = person; // ambil property ke variabel langsung
console.log(name, age);

// 1.12 Spread operator untuk clone/merge object
let objA = { a: 1, b: 2 };
let objB = { b: 3, c: 4 };
let merged = { ...objA, ...objB }; // b ditimpa jadi 3
console.log(merged);

// 1.13 Optional chaining (?.)
let user = { profile: { address: "Tokyo" } };
console.log(user.profile?.address); // "Tokyo"
console.log(user.contact?.phone);   // undefined, tidak error

// ===========================
// 2. STANDARD (sekitar 15%)
// ===========================

// 2.1 Object.assign untuk merge
let target = { a: 1 };
let source = { b: 2 };
Object.assign(target, source);
console.log(target);

// 2.2 Object.freeze (membuat object tidak bisa diubah)
let frozen = Object.freeze({ lang: "JS" });
// frozen.lang = "Python"; // tidak berpengaruh

// 2.3 Object.seal (boleh ubah value, tapi tidak bisa tambah/hapus property)
let sealed = Object.seal({ name: "Eve" });
sealed.name = "Eva"; // boleh
// sealed.age = 20;   // tidak bisa

// 2.4 Object.defineProperty
// Bisa membuat property dengan konfigurasi khusus (misalnya tidak enumerable)
let obj = {};
Object.defineProperty(obj, "secret", {
  value: "hidden",
  enumerable: false // tidak muncul saat loop
});
console.log(obj.secret);

// ===========================
// 3. ADVANCED (sekitar 5%)
// ===========================

// 3.1 Getter & Setter
// get → membuat property seolah dinamis dihitung setiap kali diakses
// set → membuat cara khusus saat property diubah
let rectangle = {
  width: 10,
  height: 5,
  get area() {
    return this.width * this.height; // dihitung otomatis
  },
  set resize(value) {
    this.width = value;
    this.height = value / 2;
  }
};

console.log(rectangle.area); // 50
rectangle.resize = 20;       // setter dijalankan
console.log(rectangle.area); // 200

// 3.2 Prototype inheritance
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

let cat = new Animal("Kitty");
cat.speak();

// ===========================
// END
// ===========================

