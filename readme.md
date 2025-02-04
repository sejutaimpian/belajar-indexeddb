<details id="top">
  <summary>Daftar Isi</summary>
  <ol>
    <li>
        <a href="#tentang-repo">Tentang Repo</a>
    </li>
    <li>
        <a href="#introduction">Introduction</a>
    </li>
    <li>
        <a href="#installation">Installation</a>
    </li>
    <li>
        <a href="#x-data-x-text-x-html">x-data, x-text, x-html</a>
    </li>
    <li>
        <a href="#re-usable-data">Re-usable Data</a>
    </li>
    <li>
        <a href="#data-less-components">Data-Less Components</a>
    </li>
    <li>
        <a href="#data-coming-from-store">Data coming from Store</a>
    </li>
    <li>
        <a href="#x-init">x-init</a>
    </li>
    <li>
        <a href="#scoping">Scoping</a>
    </li>
    <li>
        <a href="#getter--setter">Getter & Setter</a>
    </li>
    <li>
        <a href="#x-show--x-transition">x-show & x-transition</a>
    </li>
    <li>
        <a href="#x-if">x-if</a>
    </li>
    <li>
        <a href="#x-for">x-for</a>
    </li>
    <li>
        <a href="#x-for-in-range">x-for in range</a>
    </li>
    <li>
        <a href="#x-bindclass">x-bind:class</a>
    </li>
    <li>
        <a href="#x-bindstyle">x-bind:style</a>
    </li>
    <li>
        <a href="#x-bindid">x-bind:id</a>
    </li>
    <li>
        <a href="#x-on">x-on</a>
    </li>
    <li>
        <a href="#x-model">x-model</a>
    </li>
    <li>
        <a href="#x-effect">x-effect</a>
    </li>
    <li>
        <a href="#x-ignore">x-ignore</a>
    </li>
    <li>
        <a href="#x-ref">x-ref</a>
    </li>
    <li>
        <a href="#tambahan">Tambahan</a>
    </li>
    <li>
        <a href="#el">$el</a>
    </li>
    <li>
        <a href="#refs--store">$refs & $store</a>
    </li>
    <li>
        <a href="#watch">$watch</a>
    </li>
    <li>
        <a href="#dispatch">$dispatch</a>
    </li>
    <li>
        <a href="#nexttick">$nextTick</a>
    </li>
    <li>
        <a href="#root">$root</a>
    </li>
    <li>
        <a href="#data">$data</a>
    </li>
    <li>
        <a href="#id--x-id">$id & x-id</a>
    </li>
    <li>
        <a href="#intro-masuk-komponen">Intro masuk komponen</a>
    </li>
    <li>
        <a href="#dropdown">Dropdown</a>
    </li>
    <li>
        <a href="#modal">Modal</a>
    </li>
    <li>
        <a href="#tabs">Tabs</a>
    </li>
    <li>
        <a href="#carousel">Carousel</a>
    </li>
    <li>
        <a href="#accordion">Accordion</a>
    </li>
    <li>
        <a href="#notification">Notification</a>
    </li>
    <li>
        <a href="#popover">Popover</a>
    </li>
    <li>
        <a href="#intro-masuk-plugin">Intro masuk plugin</a>
    </li>
    <li>
        <a href="#mask">Mask</a>
    </li>
    <li>
        <a href="#intersect">Intersect</a>
    </li>
    <li>
        <a href="#persist">Persist</a>
    </li>
    <li>
        <a href="#focus">Focus</a>
    </li>
  </ol>
</details>

# Tentang Repo

Repo ini saya buat sebagai riwayat sekaligus rangkuman belajar materi IndexedDB.  
Materi ini saya dapat dari berbagai sumber, tapi berpatok kepada [Using IndexedDB | MDN](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB). Selain materi dari berbagai sumber, materi ini juga disempurnakan dengan bantuan AI ChatGPT dan GitHub Copilot.

# Introduction

IndexedDB adalah cara untuk menyimpan data user di browser (bukan di server). Karena datanya disimpan di browser, maka proses pengolahan data masih tetap bisa dilakukan walau dalam keadaan offline. Banyak orang bertanya-tanya apa bedanya indexedDB dengan localStorage? kan sama-sama penyimpanan data di browser?. Walaupun sekilas terlihat sama, namun keduanya memiliki kemampuan yang berbeda. Perbedaan itu diantaranya:

| **Fitur**                        | **IndexedDB**                                                             | **localStorage**                                           |
| -------------------------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------- |
| **Struktur Data**                | Penyimpanan **berbasis objek** (Object Store)                             | Penyimpanan **key-value sederhana**                        |
| **Tipe Data yang Bisa Disimpan** | **Objek kompleks**, array, file, blob                                     | Hanya **string**                                           |
| **Kapasitas**                    | **Hingga ratusan MB atau lebih** (bergantung pada browser)                | **5-10 MB saja** (terbatas)                                |
| **Mode Operasi**                 | **Asinkron** (menggunakan event handler atau Promise)                     | **Sinkron** (langsung membaca/menulis data)                |
| **Kecepatan Akses**              | Lebih lambat karena bekerja dengan transaksi                              | Lebih cepat karena hanya menyimpan string                  |
| **Dukungan Indexing**            | Bisa membuat **index** untuk pencarian cepat                              | Tidak ada indexing                                         |
| **Keamanan**                     | Lebih aman karena hanya bisa diakses dari domain yang sama                | Mudah diakses dari JavaScript (potensi eksploitasi)        |
| **Dukungan Transaksi**           | **Ya**, bisa melakukan transaksi baca/tulis yang aman                     | **Tidak ada transaksi**                                    |
| **Kegunaan Utama**               | Menyimpan data kompleks seperti cache aplikasi, database offline, dan PWA | Menyimpan setting sederhana, token sesi, atau cache ringan |

<p align="right"><a href="#top">Go 🔝</a></p>

# Browser Support

Saat ini indexedDB sudah support di semua browser kecuali Opera Mini. Untuk mendapatkan daftar browser yang mendukung indexedDB, kunjungi [caniuse.com/indexeddb](https://caniuse.com/indexeddb)

<p align="right"><a href="#top">Go 🔝</a></p>

# Pattern

1. Open Database.
2. Create Object Store & Index.
3. Start Transaction.
4. CRUD.
5. Olah result.

# Open Database

Open database pada indexedDB sama seperti membuka koneksi database pada database SQL. Open database lumrahnya dijalankan sekali lalu resultnya disimpan ke dalam variable `db` agar menjadi instance sehingga bisa digunakan kembali.

```js
const openRequest = indexedDB.open("myDatabase", 1);

openRequest.onupgradeneeded = (event) => {
  // onupgradeneeded
};

openRequest.onsuccess = (event) => {
  // db adalah instance database
  db = event.target.result;
  console.log("Database berhasil dibuka");
};

openRequest.onerror = (event) => {
  console.error("Database gagal dibuka", event.target.error?.message);
  console.error(event.target.error);
};
```

> Baca selengkapnya di [IDBRequest](https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest)

## onupgradeneeded

handler ini akan dipanggil ketika kita belum punya database yang sama dengan nama yang kita berikan pada `openRequest` atau saat kita memberikan versi yang lebih tinggi dari versi yang sudah ada. Pada handler ini kita bisa membuat struktur data yang kita inginkan.

```js
openRequest.onupgradeneeded = (event) => {
  const db = event.target.result; // db adalah instance database untuk scope ini saja.
  // membuat struktur data (object store dan index)
  const objectStore = db.createObjectStore("people", {
    keyPath: "id",
    autoIncrement: true,
  });
  objectStore.createIndex("name", "name", { unique: true });
  objectStore.createIndex("email", "email", { unique: true });
  objectStore.createIndex("created_at", "created_at", { unique: false });
  objectStore.createIndex("updated_at", "updated_at", { unique: false });
};
```

## onsuccess

handler ini akan dipanggil ketika database berhasil dibuka. Isinya untuk membuat instance database agar bisa digunakan kembali. Bisa juga untuk sync data dari server dengan state.

```js
openRequest.onsuccess = (event) => {
  // db adalah instance database
  db = event.target.result;
  console.log("Database berhasil dibuka");
  syncData();
};
```

## onerror

```js
openRequest.onerror = (event) => {
  console.error("Database gagal dibuka", event.target.error?.message);
  console.error(event.target.error);
};
```

## onblocked

<!-- skip aja we -->

<p align="right"><a href="#top">Go 🔝</a></p>

# Create Object Store & Index

Ini udah dibahas di onupgradeneeded

# Start Transaction

Transaction pada indexedDB kegunaannya sama seperti transaksi pada database SQL. Yaitu untuk mengelompokkan beberapa operasi database (seperti menambah, memperbarui, atau menghapus data) ke dalam satu unit kerja yang dapat berhasil atau gagal secara atomik. Transaksi memastikan konsistensi data dan memungkinkan pengendalian akses data. Setelah transaction biasanya dilanjutkan dengan membuat objectStore yang akan diolah (CRUD)

```js
const transaction = db.transaction(["people"], "readwrite");
const objectStore = transaction.objectStore("people");
```

> kenapa transaction dan objectStore harus parsing nama object?

Pada kasus transaction kita perlu menentukan nama object yang akan diolah agar menghindari race condition sehingga data tidak tumpang tindih. Kalau mau melakukan CRUD untuk banyak objectStore, maka kita perlu menentukan nama objectStore tersebut dalam array.

```js
const transaction = db.transaction(["people", "posts"], "readwrite");
const peopleStore = transaction.objectStore("people");
const postsStore = transaction.objectStore("posts");
```

> Baca selengkapnya di [IDBTransaction](https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction)

# CRUD

## CREATE

```js
const now = new Date().toISOString();

const addRequest = peopleStore.add({
  username: this.username,
  email: this.email,
  created_at: now,
  updated_at: now,
});

addRequest.onsuccess = () => {
  console.log("Person berhasil ditambahkan");
  syncData();
};
addRequest.onerror = (event) => {
  console.error("Gagal menambahkan person", event.target.error?.message);
  console.error(event.target.error);
};
```

## READ

get by id

```js
const getRequest = peopleStore.get(1);

getRequest.onsuccess = (event) => {
  console.log(event.target.result);
  syncData();
};

getRequest.onerror = (event) => {
  console.error("Gagal mengambil data", event.target.error?.message);
  console.error(event.target.error);
};
```

get all

```js
const getAllRequest = peopleStore.getAll();
getAllRequest.onsuccess = (event) => {
  console.log(event.target.result);
  syncData();
};

getAllRequest.onerror = (event) => {
  console.error("Gagal membaca data", event.target.errorCode);
};
```

[cursor (skip aja we)](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB#using_a_cursor)

## UPDATE

```js
const updateRequest = peopleStore.put({
  id: 1,
  username: "user123",
  email: "user123@gmail.com",
  created_at: now,
  updated_at: now,
});

updateRequest.onsuccess = () => {
  console.log("Person berhasil diupdate");
  syncData();
};
updateRequest.onerror = (event) => {
  console.error("Gagal mengupdate person", event.target.error?.message);
  console.error(event.target.error);
};
```

untuk melakukan update tidak bisa hanya mengupdate 1 property saja tapi harus mengirim semua property. Jadi kalau kamu hanya punya id, maka kamu perlu get dulu. Contoh di bawah jika hanya ingin mengubah email.

```js
const getRequest = peopleStore.get(1);

getRequest.onsuccess = (event) => {
  const person = event.target.result;

  person.email = "emailbaru@gmail.com";

  const updateRequest = peopleStore.put(person);
  updateRequest.onsuccess = () => {
    console.log("Person berhasil diupdate");
    syncData();
  };
  updateRequest.onerror = (event) => {
    console.error("Gagal mengupdate person", event.target.error?.message);
    console.error(event.target.error);
  };
};

getRequest.onerror = (event) => {
  console.error("Gagal mengambil data", event.target.error?.message);
  console.error(event.target.error);
};
```

## DELETE

```js
const deleteRequest = peopleStore.delete(1);

deleteRequest.onsuccess = () => {
  console.log("Person berhasil dihapus");
  syncData();
};

deleteRequest.onerror = (event) => {
  console.error("Gagal menghapus person", event.target.error?.message);
  console.error(event.target.error);
};
```
