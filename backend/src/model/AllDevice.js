//import mongoose from 'mongoose';
//import uniqueValidator from 'mongoose-unique-validator'

const AllDevice = mongoose.Schema({
    EasIds: { type: String },
        Udid: { type: String, unique: true  },
        SerialNumber: { type: String, unique: true },
        MacAddress: { type: String, unique: true },
        Imei: { type: Number, unique: true },
        EasId: {},
        AssetNumber: { type: String, unique: true },
        DeviceFriendlyName: { type: String },
        LocationGroupId: {
            Id: { type: String },
            Uuid: { type: Number },
            Name: { type: String },
        },
        LocationGroupName: { type: String },
        User: {
            Id: {
                Value: { type: Number },
            },
            Uuid: { type: String },
            Name: { type: String },
        },
        UserName: { type: String },
        DataProtectionStatus: { type: Number },
        UserEmailAddress: { type: String },
        Ownership: { type: String },
        PlatformId: {
            Id: {
                Value: { type: Number },
            },
            Name: { type: String },
        },
        Platform: { type: String },
        ModelId: {
            Id: {
                Value: { type: Number },
            },
            Name: { type: String },
        },
        Model: { type: String },
        OperatingSystem: { type: Number },
        PhoneNumber: { type: Number },
        LastSeen: { type: String },
        EnrollmentStatus: { type: String },
        ComplianceStatus: { type: String },
        CompromisedStatus: { type: String },
        LastEnrolledOn: { type: String },
        LastComplianceCheckOn: { type: String },
        LastCompromisedCheckOn: { type: String },
        IsSupervised: { type: String },
        DeviceMCC: {
            SIMMCC: {},
            CurrentMCC: {}
        },
        VirtualMemory: { type: Number },
        DeviceCapacity: { type: Number },
        AvailableDeviceCapacity: { type: Number },
        IsDeviceDNDEnabled: { type: String },
        IsDeviceLocatorEnabled: { type: String },
        IsCloudBackupEnabled: { type: String },
        IsActivationLockEnabled: { type: String },
        IsNetworkTethered: { type: String },
        BatteryLevel: { type: Number },
        IsRoaming: { type: String },
        SystemIntegrityProtectionEnabled: { type: String },
        ProcessorArchitecture: { type: Number },
        TotalPhysicalMemory: { type: Number },
        AvailablePhysicalMemory: { type: Number },
        Id: {
            Value: { type: Number },
        },
        Uuid: { type: String },
})

//AllDevice.plugin(uniqueValidator, { message: 'El {PATH} ya existe.' })

//module.exports = mongoose.model('AllDevice', AllDevice);