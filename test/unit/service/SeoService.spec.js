describe('Seo service', () => {
	it('check is seo', async(done) => {
		let headers = {'user-agent': 'Facebot'};
		let result = SeoService.isRobot(headers);
		result.should.be.true;
		done();
	});
});
