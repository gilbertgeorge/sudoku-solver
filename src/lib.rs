mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn solve(puzzle: JsValue) -> JsValue {
    utils::set_panic_hook();
    let mut puzzle: [[u8; 9]; 9] = serde_wasm_bindgen::from_value(puzzle).unwrap();
    sudoku(&mut puzzle);
    serde_wasm_bindgen::to_value(&puzzle).unwrap()
}

pub fn sudoku(puzzle: &mut [[u8; 9]; 9]) {
    let mut row = 0;
    let mut col = 0;
    let mut found = false;
    for i in 0..9 {
        for j in 0..9 {
            if puzzle[i][j] == 0 {
                row = i;
                col = j;
                found = true;
                break;
            }
        }
        if found {
            break;
        }
    }

    if !found {
        return;
    }

    for val in 1..=9 {
        if is_valid_move(puzzle, row, col, val) {
            puzzle[row][col] = val;
            sudoku(puzzle);

            if is_solved(puzzle) {
                return;
            }

            puzzle[row][col] = 0;
        }
    }
}

fn is_valid_move(puzzle: &[[u8; 9]; 9], row: usize, col: usize, val: u8) -> bool {
    // check row
    for i in 0..9 {
        if puzzle[row][i] == val {
            return false;
        }
    }

    for i in 0..9 {
        if puzzle[i][col] == val {
            return false;
        }
    }

    let box_row = row / 3 * 3;
    let box_col = col / 3 * 3;
    for i in 0..3 {
        for j in 0..3 {
            if puzzle[box_row + i][box_col + j] == val {
                return false;
            }
        }
    }

    true
}

fn is_solved(puzzle: &[[u8; 9]; 9]) -> bool {
    // check rows
    for i in 0..9 {
        let mut row_vals = [false; 9];
        for j in 0..9 {
            let val = puzzle[i][j];
            if val == 0 {
                return false;
            }
            let idx = (val - 1) as usize;
            if row_vals[idx] {
                return false;
            }
            row_vals[idx] = true;
        }
    }

    for j in 0..9 {
        let mut col_vals = [false; 9];
        for i in 0..9 {
            let val = puzzle[i][j];
            let idx = (val - 1) as usize;
            if col_vals[idx] {
                return false;
            }
            col_vals[idx] = true;
        }
    }

    for k in 0..9 {
        let mut box_vals = [false; 9];
        let box_row = k / 3 * 3;
        let box_col = k % 3 * 3;
        for i in 0..3 {
            for j in 0..3 {
                let val = puzzle[box_row + i][box_col + j];
                let idx = (val - 1) as usize;
                if box_vals[idx] {
                    return false;
                }
                box_vals[idx] = true;
            }
        }
    }

    true
}