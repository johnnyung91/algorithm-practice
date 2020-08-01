function fileNaming(names) {
  const filenames = {}

  return names.map(name => {
      if (!filenames[name]) {
          filenames[name] = 1
          return name
      }
      if (filenames[name]) {
          let newName = `${name}(${filenames[name]})`
          while (filenames[newName]) {
              filenames[name]++
              newName = `${name}(${filenames[name]})`
          }
          filenames[newName] = 1
          return newName
      }
  })
}


/* Other Solutions

const fileNaming = names => {
    const used = {};
    return names.map(name => {
        let newName = name;
        while (used[newName]) {
            newName = `${name}(${used[name]++})`;
        }
        used[newName] = 1;
        return newName;
    });
};

*/
