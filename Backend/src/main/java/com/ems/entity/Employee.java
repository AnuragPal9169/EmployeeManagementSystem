package com.ems.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties({ "hibernateLazyInitializer" })
@Entity
public class Employee implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false)
	private int eid;
	private String ename;
	private int eage;
	private String estate;
	private String eusername;
	private String epassword;
	private String eemail;

	public Employee() {

	}

	public Employee(int eid, String ename, int eage, String estate, String eusername, String epassword, String eemail) {
		super();
		this.eid = eid;
		this.ename = ename;
		this.eage = eage;
		this.estate = estate;
		this.eusername = eusername;
		this.epassword = epassword;
		this.eemail = eemail;
	}

	public int getEid() {
		return eid;
	}

	public void setEid(int eid) {
		this.eid = eid;
	}

	public String getEname() {
		return ename;
	}

	public void setEname(String ename) {
		this.ename = ename;
	}

	public int getEage() {
		return eage;
	}

	public void setEage(int eage) {
		this.eage = eage;
	}

	public String getEstate() {
		return estate;
	}

	public void setEstate(String estate) {
		this.estate = estate;
	}

	public String getEusername() {
		return eusername;
	}

	public void setEusername(String eusername) {
		this.eusername = eusername;
	}

	public String getEpassword() {
		return epassword;
	}

	public void setEpassword(String epassword) {
		this.epassword = epassword;
	}

	public String getEemail() {
		return eemail;
	}

	public void setEemail(String eemail) {
		this.eemail = eemail;
	}

}
