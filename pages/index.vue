<template>
  <div class="tw-mx-5">
    <Header />
    <div class="tw-flex tw-w-full tw-mt-11">
      <Sidebar />
      <div class="tw-pl-12 tw-w-full">
        <div>
          <h4 class="tw-text-lg tw-text-black tw-font-bold tw-mb-2">Scheduled events</h4>
        </div>
        <Events  :events="events"/>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  components: {
   
  },
  data() {
    return {
      events:[
        {
          id: 1,
          date: '06, Dec, 2020',
          time: '12:30',
          location: 'Zoom',
          address: 'https://zoom.com',
          title: 'Web design class, How to be an expert',
        },
        {
          id: 1,
          date: '06, Dec, 2020',
          time: '12:30',
          location: 'Zoom',
          address: 'https://zoom.com',
          title: 'Web design class, How to be an expert',
        },
        {
          id: 1,
          date: '06, Dec, 2020',
          time: '12:30',
          location: 'Zoom',
          address: 'https://zoom.com',
          title: 'Web design class, How to be an expert',
        },
      ]
    };
  },
  layouts: "default"
};
</script>
