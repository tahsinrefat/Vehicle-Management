# Copyright (c) 2024, Tahsin Ahmed Refat and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

#method for backend transfer
class VehicleAvailability(Document):
	@frappe.whitelist()
	def prepare_vehicle_availability(chassis_number):
		return {
			"doctype": "Vehicle Availability",
			"chassis_number": chassis_number,
			"posting_date": frappe.utils.nowdate(),
		}
