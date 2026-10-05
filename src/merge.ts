export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {

  // หา length ของ collection_1, collection_2, collection_3
  const length_1 = collection_1.length
  const length_2 = collection_2.length
  const length_3 = collection_3.length

  // index ของแต่ละ collection
  let index_1 = 0
  let index_2 = length_2 - 1
  let index_3 = 0

  // สร้าง collection ใหม่เพื่อเก็บข้อมูล
  let new_collection: number[] = []

  // loop จนกว่า index_1, index_2, index_3 จะถึงค่าของ collection_1, collection_2, collection_3
  while(index_1 < length_1 || index_2 >= 0 || index_3 < length_3) {
    // ตรวจสอบว่า index ของแต่ละ collection มีข้อมูลหรือไม่
    const check1 = index_1 < length_1
    const check2 = index_2 >= 0
    const check3 = index_3 < length_3

    if(
      check1 && //กรณี collection_1 มีข้อมูล
      (!check2 || collection_1[index_1] <= collection_2[index_2]) && // และ collection_2 ไม่มีข้อมูล หรือ ค่าของ collection_1 น้อยกว่าหรือเท่ากับค่าของ collection_2
      (!check3 || collection_1[index_1] <= collection_3[index_3]) // และ collection_3 ไม่มีข้อมูล หรือ ค่าของ collection_1 น้อยกว่าหรือเท่ากับค่าของ collection_3
    ) {
      new_collection.push(collection_1[index_1])
      index_1++
    }else if(
      check2 && //กรณี collection_2 มีข้อมูล
      (!check3 || collection_2[index_2] <= collection_3[index_3]) // และ collection_3 ไม่มีข้อมูล หรือ ค่าของ collection_2 น้อยกว่าหรือเท่ากับค่าของ collection_3
    ) {
      new_collection.push(collection_2[index_2])
      index_2--
    } else {
      new_collection.push(collection_3[index_3])
      index_3++
    }
  }

  return new_collection
}