
loadAPI(1);

host.defineController("Novation", "Launchkey 25", "1.0", "11516a34-29d9-4126-9a79-db4be58c4c15");
host.defineMidiPorts(2, 2);
host.addDeviceNameBasedDiscoveryPair(["Launchkey 25 MIDI 1", "Launchkey 25 MIDI 2"], ["Launchkey 25 MIDI 1", "Launchkey 25 MIDI 2"]); 

function init()
{
	host.getMidiInPort(0).setMidiCallback(onMidi);
	host.getMidiInPort(0).setSysexCallback(onSysex);
}

function exit()
{
}

function onMidi(status, data1, data2)
{
}

function onSysex(data)
{
}
