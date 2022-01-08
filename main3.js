(function () {
  let btn = document.getElementById("button");
  let divContainer = document.getElementById("container");
  let pageTemplates = document.getElementById("myTemplates");
  let folders = [];
  let fid = -1;

  btn.addEventListener("click", addFolder);

  function addFolder() {
    let fname = prompt("Enter name please");

    if (!!fname) {
      let exists = folders.findIndex((f) => f.name == fname);
      if (exists == -1) {
        fid++;

        folders.push({
          id: fid,
          name: fname,
        });

        addFolderHTML(fname, fid);

        saveToStorage();
      } else {
        alert(fname + " already exists");
      }
    } else {
      alert("Please enter something");
    }
  }

  function editFolder() {
      let divFolder = this.parentNode;
      let divName = divFolder.querySelector("[purpose='name']");

      let nfname = prompt("Enter new name");

    if (!!nfname) {
      if (nfname != divContainer.innerHTML) {
        let exists = folders.findIndex((f) => f.name == nfname);
        if (exists == -1) {
          fid++;

          folders.push({
            id: fid,
            name: nfname,
          });

          addFolderHTML(nfname, fid);

          saveToStorage();
        } else {
          alert(nfname + " already exists");
        }
      } else {
        alert("This is old name. Please enter something new.");
      }
    } else {
      alert("Please enter something");
    }
  }

  function deleteFolder() {
    let divFolder = this.parentNode;
    let divName = divFolder.querySelector("[purpose='name']");

    let flag = confirm(
      "Are you sure you want to delete " + divName.innerHTML + " ?"
    );
    if (flag == true) {
      //   ram
      let fidx = folders.findIndex((f) => f.name == divName.innerHTML);
      folders.splice(fidx, 1);

      // html
      divContainer.removeChild(divFolder);

      // storage
      saveToStorage();
    }
  }

  function addFolderHTML(fname, fid) {
    let divFolderTemplate = pageTemplates.content.querySelector(".folder");
    let divFolder = document.importNode(divFolderTemplate, true);

    let divName = divFolder.querySelector("[purpose='name']");
    let spanEdit = divFolder.querySelector("[action='edit']");
    let spanDelete = divFolder.querySelector("[action='delete']");

    divFolder.setAttribute("fid", fid);
    divName.innerHTML = fname;
    spanEdit.addEventListener("click", editFolder);
    spanDelete.addEventListener("click", deleteFolder);

    divContainer.appendChild(divFolder);
  }

  function saveToStorage() {
    let fjson = JSON.stringify(folders);
    localStorage.setItems("data", fjson);
  }

  function loadFoldersFromStorage() {
    let fjson = localStorage.getItem("data"); // we get this in json form
    if (!!fjson) {
      folders = JSON.parse(fjson); // converted to string form so that we can use it normally
      folders.forEach((f) => {
        if (f.id > fid) {
          fid = f.id;
        }
        addFolderHTML(f.name, f.id);
      });
    }
  }

  loadFoldersFromStorage();
})();
