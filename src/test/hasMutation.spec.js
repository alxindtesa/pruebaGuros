const hasMutation = require("../utils/hasMutation");

describe("HasMutation function", () => {
  it("Without params", () => {
    const verifyMutation = hasMutation()
    expect(verifyMutation).toEqual(undefined);
  });
  it("Send string as param", () => {
    const verifyMutation = hasMutation('')
    expect(verifyMutation).toEqual(undefined);
  });
  it("Send Number as param", () => {
    const verifyMutation = hasMutation(4)
    expect(verifyMutation).toEqual(undefined);
  });
  it("Send Object as param", () => {
    const verifyMutation = hasMutation({"test":"test"})
    expect(verifyMutation).toEqual(undefined);
  });
  it("Send Boolean as param", () => {
    const verifyMutation = hasMutation(true)
    expect(verifyMutation).toEqual(undefined);
  });
  it("Send Empty Array as param", () => {
    const verifyMutation = hasMutation([])
    expect(verifyMutation).toEqual(undefined);
  });
  it("Send Non-square matrix",()=>{
    const verifyMutation = hasMutation(["AAAAA", "CAAAA", "GCATT", "GACAG"])
    expect(verifyMutation).toEqual(undefined);
  })
  it("Send Square matrix with invalid data",()=>{
    const verifyMutation = hasMutation(["AAAAB", "HAAAA", "GCLTT", "GACAG","GACAG"])
    expect(verifyMutation).toEqual(undefined);
  })
  it("Send Square matrix with valid data and without mutation",()=>{
    const verifyMutation = hasMutation(["ATGCGA", "CAGTGC", "TTATTT", "AGACGG","GCGTCA","TCACTG"])
    expect(verifyMutation).toEqual(false);
  })
  it("Send Square matrix with valid data and mutation",()=>{
    const verifyMutation = hasMutation(["AAAAA", "CAAAA", "GCATT", "GACAG", "TTTCA"])
    expect(verifyMutation).toEqual(true);
  })
});
