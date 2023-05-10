export const TowerSelectOptions = [
  { value: 'A', label: 'A' },
  { value: 'B', label: 'Б' },
];

export const FloorSelectOptions = [];
for (let i = 3; i <= 27; i++) {
  FloorSelectOptions.push({
    value: `${i}`,
    label: `${i}`,
  });
}

export const MeetingRoomSelectOptions = [];
for (let i = 1; i <= 10; i++) {
  MeetingRoomSelectOptions.push({
    value: `${i}`,
    label: `${i}`,
  });
}
