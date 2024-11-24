// Copyright (c) 2024, Tahsin Ahmed Refat and contributors
// For license information, please see license.txt


frappe.ui.form.on("Vehicle Price", {
    company_price: function(frm) {
        calculate_sum(frm);
        calculate_grand_total(frm);
    },
    customer_price: function(frm) {
        calculate_sum(frm);
        calculate_grand_total(frm);
    }
});

frappe.ui.form.on("Vehicle Items", {
    quantity: function(frm, cdt, cdn){
        console.log('called');
        calculate_amount(frm, cdt, cdn);
        calculate_grand_total(frm);
    },
    rate: function(frm, cdt, cdn){
        console.log('called');
        calculate_amount(frm, cdt, cdn);
        calculate_grand_total(frm);
    },
    other_items_remove: function(frm) {
        calculate_grand_total(frm);
    },
    item: function(frm, cdt, cdn){
        let current_row = locals[cdt][cdn];
        let is_duplicate = check_duplicate_items(frm, current_row.item, cdn);

        if (is_duplicate) {
            frappe.msgprint({
                title: __('Duplicate Item!'),
                indicator: 'red',
                message: __('{0} is already exists in the table. Please select a different item!', [current_row.item])
            });
            frappe.model.set_value(cdt, cdn, 'item', null);
        }
    }
})

function calculate_sum(frm) {
    let company_price_op = frm.doc.company_price || 0;
    let customer_price_op = frm.doc.customer_price || 0;

    let total_price = customer_price_op + company_price_op;
    frm.set_value('sale_price', total_price);
}

function calculate_amount(frm, cdt, cdn) {
    let row = locals[cdt][cdn];
    let quantity_op = row.quantity || 0;
    let rate_op = row.rate || 0;

    let total_amount = quantity_op * rate_op;

    frappe.model.set_value(cdt, cdn, 'amount', total_amount);
}

function calculate_grand_total(frm) {
    let company_price_op = frm.doc.company_price || 0;
    let customer_price_op = frm.doc.customer_price || 0;

    let child_table_total = 0;
    if (frm.doc.other_items) {
        frm.doc.other_items.forEach(row => {
            child_table_total += row.amount || 0;
        });
    }

    let grand_total = company_price_op + customer_price_op + child_table_total;

    frm.set_value('grand_total', grand_total);
}

function check_duplicate_items(frm, item, current_row_cdn) {
    let is_duplicate = false;

    frm.doc.other_items.forEach(row => {
        if (row.name !== current_row_cdn && row.item === item){
            is_duplicate = true;
        }
    });
    return is_duplicate;
}