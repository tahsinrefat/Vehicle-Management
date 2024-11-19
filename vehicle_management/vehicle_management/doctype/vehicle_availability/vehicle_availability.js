// Copyright (c) 2024, Tahsin Ahmed Refat and contributors
// For license information, please see license.txt

frappe.ui.form.on('Vehicle Availability', {
    status: function (frm) {
        if (frm.doc.status === "Port") {
            frm.set_value('ship_details', null);
            frm.set_value('inhouse_address', null);
            frm.set_value('workshop_address', null);
            frm.set_value('others', null);
        } else if (frm.doc.status === "Onship") {
            frm.set_value('port_location', null);
            frm.set_value('shed_number', null);
            frm.set_value('inhouse_address', null);
            frm.set_value('workshop_address', null);
            frm.set_value('others', null);
        } else if (frm.doc.status === "Inhouse") {
            frm.set_value('port_location', null);
            frm.set_value('shed_number', null);
            frm.set_value('ship_details', null);
            frm.set_value('workshop_address', null);
            frm.set_value('others', null);
        } else if (frm.doc.status === "Workshop") {
            frm.set_value('port_location', null);
            frm.set_value('shed_number', null);
            frm.set_value('ship_details', null);
            frm.set_value('inhouse_address', null);
            frm.set_value('others', null);
        } else if (frm.doc.status === "Others") {
            frm.set_value('port_location', null);
            frm.set_value('shed_number', null);
            frm.set_value('ship_details', null);
            frm.set_value('inhouse_address', null);
            frm.set_value('workshop_address', null);
        } else{
            frm.set_value('port_location', null);
            frm.set_value('shed_number', null);
            frm.set_value('ship_details', null);
            frm.set_value('inhouse_address', null);
            frm.set_value('workshop_address', null);
            frm.set_value('others', null);
        }
    },
});



