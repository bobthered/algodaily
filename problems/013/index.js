const isDollarDeleteEqual = arr => arr.map(a => a.replace(/^.+\$/g, ''));

module.exports = isDollarDeleteEqual;
