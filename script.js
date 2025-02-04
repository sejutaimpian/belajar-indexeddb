document.addEventListener("alpine:init", () => {
  Alpine.data("indexedDBComponent", () => ({
    db: null,
    idUpdate: null,
    username: "",
    email: "",
    people: [],

    init() {
      this.openDatabase();
    },

    openDatabase() {
      const request = indexedDB.open("wawuh", 1);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        const objectStore = db.createObjectStore("people", {
          keyPath: "id",
          autoIncrement: true,
        });
        objectStore.createIndex("name", "name", { unique: true });
        objectStore.createIndex("email", "email", { unique: true });
        objectStore.createIndex("created_at", "created_at", { unique: false });
        objectStore.createIndex("updated_at", "updated_at", { unique: false });
      };

      request.onsuccess = (event) => {
        this.db = event.target.result;
        console.log("Database berhasil dibuka");
        this.fetchData();
      };

      request.onerror = (event) => {
        console.error("Database gagal dibuka", event.target.error?.message);
        console.error(event.target.error);
      };
    },
    addUser() {
      if (this.db) {
        const now = new Date().toISOString();
        // Method Chaining
        // const request = this.db
        //   .transaction(["people"], "readwrite")
        //   .objectStore("people")
        //   .add({
        //     username: this.username,
        //     email: this.email,
        //     description: "lorem ipsum",
        //     created_at: now,
        //     updated_at: now,
        //   });
        // request.onsuccess = () => {
        //   console.log("User berhasil ditambahkan");
        //   this.username = "";
        //   this.email = "";
        //   this.fetchData();
        // };
        // request.onerror = (event) => {
        //   console.error("Gagal menambahkan user", event.target.error?.message);
        //   console.error(event.target.error);
        // };
        // Cara Normal untuk 1
        const transaction = this.db.transaction(["people"], "readwrite");
        const objectStore = transaction.objectStore("people");

        const request = objectStore.add({
          username: this.username,
          email: this.email,
          description: "lorem ipsum",
          created_at: now,
          updated_at: now,
        });
        request.onsuccess = () => {
          console.log("User berhasil ditambahkan");
          this.username = "";
          this.email = "";
          this.fetchData();
        };
        request.onerror = (event) => {
          console.error("Gagal menambahkan user", event.target.error?.message);
          console.error(event.target.error);
        };
      }
    },
    updateUser() {
      if (this.db) {
        const now = new Date().toISOString();
        const transaction = this.db.transaction(["people"], "readwrite");
        const objectStore = transaction.objectStore("people");

        const request = objectStore.put({
          id: this.idUpdate,
          username: this.username,
        });
        request.onsuccess = () => {
          console.log("User berhasil diupdate");
          this.username = "";
          this.email = "";
          this.fetchData();
        };
        request.onerror = (event) => {
          console.error("Gagal mengupdate user", event.target.error?.message);
          console.error(event.target.error);
        };
      }
    },
    deleteUser(id) {
      if (this.db) {
        const transaction = this.db.transaction(["people"], "readwrite");
        const objectStore = transaction.objectStore("people");

        const deleteRequest = objectStore.delete(id);

        deleteRequest.onsuccess = () => {
          console.log("User berhasil dihapus");
          this.fetchData();
        };

        deleteRequest.onerror = (event) => {
          console.error("Gagal menghapus user", event.target.error?.message);
          console.error(event.target.error);
        };
      }
    },
    getSatu() {
      if (this.db) {
        const transaction = this.db.transaction(["people"], "readonly");
        const objectStore = transaction.objectStore("people");

        const getRequest = objectStore.get(1);

        getRequest.onsuccess = (event) => {
          console.log(event.target.result);
        };

        getRequest.onerror = (event) => {
          console.error("Gagal mengambil data", event.target.error?.message);
          console.error(event.target.error);
        };
      }
    },
    fetchData() {
      if (this.db) {
        const transaction = this.db.transaction(["people"], "readonly"); // default readonly
        const objectStore = transaction.objectStore("people");
        const getAllRequest = objectStore.getAll();
        getAllRequest.onsuccess = (event) => {
          console.log(event.target.result);
          this.people = event.target.result;
          console.log(this.people);
        };

        getAllRequest.onerror = (event) => {
          console.error("Gagal membaca data", event.target.errorCode);
        };
      }
    },
    dev() {
      console.log(Alpine.raw(this.people));
      console.log(this.people);
      console.log(typeof this.idUpdate);
    },
  }));
});
