// Copyright (c) 2024, Tahsin Ahmed Refat and contributors
// For license information, please see license.txt

frappe.ui.form.on("Vehicle Details", {
	refresh: function(frm) {
        if (frm.doc.docstatus === 1) {
            frm.add_custom_button(__('Vehicle Availability'), function () {
                frappe.db.get_value('Vehicle Availability', { 'chassis_number':  frm.doc.chassis_number}, 'name', function(value){
                    if (value && value.name) {
                        frappe.set_route('Form', 'Vehicle Availability', value.name);
                    } else{
                        frappe.set_route('Form', 'Vehicle Availability', {
                            'chassis_number': frm.doc.chassis_number
                        });
                    }
                });
            }, __('Go To'));
            frm.add_custom_button(__('Vehicle Price'), function () {
                frappe.db.get_value('Vehicle Price', { 'chassis_number':  frm.doc.chassis_number}, 'name', function(value){
                    if (value && value.name) {
                        frappe.set_route('Form', 'Vehicle Price', value.name);
                    } else{
                        frappe.set_route('Form', 'Vehicle Price', {
                            'chassis_number': frm.doc.chassis_number
                        });
                    }
                });
            }, __('Go To'));
        }
	},
});
